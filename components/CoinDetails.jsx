"use client";

import useFetchCoinDetails from "@/hooks/useFetchCoinDetails";
import Spinner from "./Spinner";
import { notFound } from "next/navigation";

const CoinDetails = ({ id }) => {
    const { coinDetails, isLoading } = useFetchCoinDetails(id);

    if (isLoading) {
        return <Spinner />;
    }

    if (!coinDetails) {
        notFound();
    }

    return (
        <div className="text-center">
            <h1>{coinDetails?.name}</h1>
            <p>{coinDetails.description?.en}</p>
        </div>
    );
};

export default CoinDetails;
