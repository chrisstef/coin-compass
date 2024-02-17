import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export async function GET(request) {
    try {
        let pathname = request.nextUrl.pathname;
        let parts = pathname.split("/");
        let id = parts[parts.length - 1];
        const url = `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${apiKey}`;
        console.log("API URL:", url);

        const response = await fetch(url);
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch coin data" },{ status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
