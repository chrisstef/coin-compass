import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

function extractRequiredFields(coin) {
    return {
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        description: coin.description.en,
        current_price: coin.market_data.current_price.usd,
        high_24h: coin.market_data.high_24h.usd,
        low_24h: coin.market_data.low_24h.usd,
        price_change_percentage_24h: coin.market_data.price_change_percentage_24h,
        price_change_percentage_7d: coin.market_data.price_change_percentage_7d,
        price_change_percentage_14d: coin.market_data.price_change_percentage_14d,
        price_change_percentage_30d: coin.market_data.price_change_percentage_30d,
        price_change_percentage_60d: coin.market_data.price_change_percentage_60d,
        price_change_percentage_200d: coin.market_data.price_change_percentage_200d,
        price_change_percentage_1y: coin.market_data.price_change_percentage_1y,
    };
}

export async function GET(request) {
    try {
        const pathname = request.nextUrl.pathname;
        const parts = pathname.split("/");
        const id = parts[parts.length - 1];

        const url = `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch coin data" },{ status: response.status });
        }

        const data = await response.json();
        const formattedData = extractRequiredFields(data);
        return NextResponse.json(formattedData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
