"use client";

import millify from "millify";
import DetailsCard from "./DetailsCard";
import { Skeleton } from "./ui/skeleton";

export const CoinDetailsCards = ({ coinDetails }) => {
    return (
        <>
            <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-3">
                <DetailsCard
                    title="Current Price"
                    value={
                        coinDetails.current_price !== undefined ? (
                            coinDetails.current_price.toLocaleString()
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
                            coinDetails.high_24h.toLocaleString()
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
                            coinDetails.low_24h.toLocaleString()
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_24h > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_24h
                                )}
                            </span>
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_7d > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_7d
                                )}
                            </span>
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_14d > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_14d
                                )}
                            </span>
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_30d > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_30d
                                )}
                            </span>
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_60d > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_60d
                                )}
                            </span>
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_200d > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_200d
                                )}
                            </span>
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
                            <span
                                className={
                                    coinDetails.price_change_percentage_1y > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {millify(
                                    coinDetails.price_change_percentage_1y
                                )}
                            </span>
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

export default CoinDetailsCards;
