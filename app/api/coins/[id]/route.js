import { NextResponse } from "next/server";
import { extractCoinDetailsFields } from "@/lib/coinUtils";

const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export async function GET(request) {
    let response;
    try {

        const pathname = request.nextUrl.pathname;
        const parts = pathname.split("/");
        const id = parts[parts.length - 1];

        const url = `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${apiKey}`;

        response = await fetch(url);
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch coin data" },{ status: response.status });
        }

        const data = await response.json();
        const formattedData = extractCoinDetailsFields(data);

        return NextResponse.json(formattedData, { status: 200 });
        
    } catch (error) {
        let status =  500;
        if (response && typeof response.status === 'number') {
            status = response.status;
        }
        return NextResponse.json({ error: error.message }, { status });
    }
}
