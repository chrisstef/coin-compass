"use client";

import * as React from "react";
import useFetchCoinDetails from "@/hooks/useFetchCoinDetails";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const DescriptionCard = ({ id }) => {
    const { coinDetails } = useFetchCoinDetails(id);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>What is {coinDetails.name}?</CardTitle>
                {coinDetails.description ? (
                    <CardDescription>{coinDetails.description}</CardDescription>
                ) : (
                    <CardDescription>
                        Oops! It seems there's no description available for{" "}
                        {coinDetails.name} at the moment. Check back later!
                    </CardDescription>
                )}{" "}
            </CardHeader>
        </Card>
    );
};

export default DescriptionCard;
