import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const perPage = 10;
        let page = request.nextUrl.searchParams.get("page");

        // Input validation
        if (typeof page !== "string" || !Number.isInteger(Number(page))) {
            throw new Error("Invalid page parameter");
        }

        page = Number(page); // Convert string to number

        console.log("Requested Page:", page);
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;
        console.log("API URL:", url);

        const response = await fetch(url);
        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch coin data" },
                { status: response.status }
            );
        }

        const data = await response.json();
        const formattedData = data.map((coin) => ({
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
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
