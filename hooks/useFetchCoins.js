"use client";

import { useState } from "react";

const useFetchCoins = () => {
    const [coins, setCoins] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(1);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchCoins = async () => {
        if (pageLoaded > 1) {
            await delay(1000);
        }

        try {
            const response = await fetch(`/api/coins?page=${pageLoaded}`);
            if (!response.ok) {
                throw new Error("Failed to fetch coin data");
            }
            const data = await response.json();
            setCoins((prevCoins) => [...prevCoins, ...data]);
            setPageLoaded(pageLoaded + 1);
        } catch (error) {
            console.error("Error fetching coin data:", error.message);
        }
    };

    return { coins, fetchCoins };
};

export default useFetchCoins;
