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
                <CardDescription>{coinDetails.description}</CardDescription>
            </CardHeader>
        </Card>
    );
};

export default DescriptionCard;
