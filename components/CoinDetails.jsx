"use client";

import useFetchCoinDetails from "@/hooks/useFetchCoinDetails";
import Spinner from "./Spinner";

const CoinDetails = ({ id }) => {
    const { coinDetails, isLoading } = useFetchCoinDetails(id);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="text-center">
            <h1>{coinDetails?.name}</h1>
            <p>{coinDetails.description?.en}</p>
        </div>
    );
};

export default CoinDetails;
