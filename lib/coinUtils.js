export function extractCoinFields(coin) {
    return {
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.image,
        current_price: coin.current_price,
        high_24h: coin.high_24h,
        low_24h: coin.low_24h,
        price_change_percentage_24h: coin.price_change_percentage_24h,
    };
}

export function extractCoinDetailsFields(coin) {
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
