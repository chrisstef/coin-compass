"use client";

import millify from "millify";
import useFetchCoinDetails from "@/hooks/useFetchCoinDetails";
import DetailsCard from "./DetailsCard";
import { Skeleton } from "./ui/skeleton";

const CoinDetails = ({ id }) => {
    const { coinDetails } = useFetchCoinDetails(id);

    return (
        <>
            <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-3">
                <DetailsCard
                    title="Current Price"
                    value={
                        coinDetails.current_price !== undefined ? (
                            coinDetails.current_price
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="USD"
                />

                <DetailsCard
                    title="24h High"
                    value={
                        coinDetails.high_24h !== undefined ? (
                            coinDetails.high_24h
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="USD"
                />
                <DetailsCard
                    title="24h Low"
                    value={
                        coinDetails.low_24h !== undefined ? (
                            coinDetails.low_24h
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="USD"
                />
            </div>

            <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-7">
                <DetailsCard
                    title="24 hours"
                    value={
                        coinDetails.price_change_percentage_24h !==
                        undefined ? (
                            millify(coinDetails.price_change_percentage_24h)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
                <DetailsCard
                    title="7 days"
                    value={
                        coinDetails.price_change_percentage_7d !== undefined ? (
                            millify(coinDetails.price_change_percentage_7d)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
                <DetailsCard
                    title="14 days"
                    value={
                        coinDetails.price_change_percentage_14d !==
                        undefined ? (
                            millify(coinDetails.price_change_percentage_14d)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
                <DetailsCard
                    title="1 month"
                    value={
                        coinDetails.price_change_percentage_30d !==
                        undefined ? (
                            millify(coinDetails.price_change_percentage_30d)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
                <DetailsCard
                    title="2 months"
                    value={
                        coinDetails.price_change_percentage_60d !==
                        undefined ? (
                            millify(coinDetails.price_change_percentage_60d)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
                <DetailsCard
                    title="200 days"
                    value={
                        coinDetails.price_change_percentage_200d !==
                        undefined ? (
                            millify(coinDetails.price_change_percentage_200d)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
                <DetailsCard
                    title="1 year"
                    value={
                        coinDetails.price_change_percentage_1y !== undefined ? (
                            millify(coinDetails.price_change_percentage_1y)
                        ) : (
                            <Skeleton className="h-[32px] w-[65px]" />
                        )
                    }
                    unit="%"
                />
            </div>
        </>
    );
};

export default CoinDetails;
