"use client";

import useCoins from "@/hooks/useCoins";

const Coins = () => {
    const { coins, loading } = useCoins();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-8">Top Coins</h1>
            <ul>
                {coins.map((coin, index) => (
                    <li key={index} className="mb-4">
                        <h2 className="text-xl font-semibold">
                            {coin.name} ({coin.symbol.toUpperCase()})
                        </h2>
                        <p className="text-gray-600">
                            Current Price: ${coin.current_price}
                        </p>
                        <p className="text-gray-600">
                            24h High: ${coin.high_24h}
                        </p>
                        <p className="text-gray-600">
                            24h Low: ${coin.low_24h}
                        </p>
                        <p className="text-gray-600">
                            Price Change (24h):{" "}
                            {coin.price_change_percentage_24h}%
                        </p>
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
        </main>
    );
};

export default Coins;
