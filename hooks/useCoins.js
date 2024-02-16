"use client";

import { useState, useEffect } from "react";

const useCoins = (initialPage = 1) => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/coins?page=${page}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch coin data");
                }
                const data = await response.json();
                setCoins((prevCoins) => [...prevCoins, ...data]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching coin data:", error.message);
                setLoading(false);
            }
        };

        fetchCoins();
    }, [page]);

    return { coins, loading, setPage };
};

export default useCoins;
