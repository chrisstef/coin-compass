"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";
import useFetchCoins from "@/hooks/useFetchCoins";

const CoinsList = () => {
    const { coins, fetchCoins } = useFetchCoins();

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchCoins();
        }
    }, [inView]);

    return (
        <>
            <ul>
                {coins?.map((coin, index) => (
                    <li key={index} className="mb-4">
                        <img
                            className="w-10 h-10"
                            src={coin.image}
                            alt={coin.name}
                        />
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
            <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
                ref={ref}
            >
                <Spinner />
            </div>
        </>
    );
};

export default CoinsList;
