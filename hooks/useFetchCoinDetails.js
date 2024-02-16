"use client";

import { useState, useEffect } from "react";

const useFetchCoinDetails = (id) => {
    const [coinDetails, setCoinDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoinDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/coins/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch coin details data");
                }
                const data = await response.json();
                setCoinDetails(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCoinDetails();
    }, [id]);

    return { coinDetails, isLoading };
};

export default useFetchCoinDetails;
