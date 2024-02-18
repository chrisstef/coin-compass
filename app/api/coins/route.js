import { NextResponse } from "next/server";
import { extractCoinFields } from "@/lib/coinUtils";

const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export async function GET(request) {
    let response;
    try {
        const perPage = 20;
        const page = request.nextUrl.searchParams.get("page");

        if (typeof page !== "string" || !Number.isInteger(Number(page))) {
            throw new Error("Invalid page parameter");
        }

        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&x_cg_demo_api_key=${apiKey}`;

        response = await fetch(url);
        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch coin data" },
                { status: response.status }
            );
        }

        const data = await response.json();
        const formattedData = data.map(extractCoinFields);

        return NextResponse.json(formattedData, { status: 200 });
        
    } catch (error) {
        let status = 500;
        if (response && typeof response.status === "number") {
            status = response.status;
        }
        return NextResponse.json({ error: error.message }, { status });
    }
}
