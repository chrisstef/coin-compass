import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export async function GET(request) {
    try {
        const perPage = 20;
        let page = request.nextUrl.searchParams.get("page");

        if (typeof page !== "string" || !Number.isInteger(Number(page))) {
            throw new Error("Invalid page parameter");
        }

        console.log("Requested Page:", page);
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&x_cg_demo_api_key=${apiKey}`;
        console.log("API URL:", url);

        const response = await fetch(url);
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch coin data" }, { status: response.status }
            );
        }

        const data = await response.json();
        const formattedData = data.map((coin) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            current_price: coin.current_price,
            high_24h: coin.high_24h,
            low_24h: coin.low_24h,
            price_change_percentage_24h: coin.price_change_percentage_24h,
        }));
        return NextResponse.json(formattedData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: response.status });
    }
}
