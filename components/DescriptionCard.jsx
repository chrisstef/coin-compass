"use client";

import Link from "next/link";
import useFetchCoinDetails from "@/hooks/useFetchCoinDetails";
import { Icons } from "@/components/icons";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const DescriptionCard = ({ id }) => {
    const { coinDetails } = useFetchCoinDetails(id);

    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>What is {coinDetails.name}?</CardTitle>
                    {coinDetails.description ? (
                        <CardDescription>
                            {coinDetails.description}
                        </CardDescription>
                    ) : (
                        <CardDescription>
                            Oops! It seems there's no description available for{" "}
                            {coinDetails.name} at the moment. Check back later!
                        </CardDescription>
                    )}{" "}
                </CardHeader>
            </Card>
            <Button className="w-32" variant="outline" asChild>
                <Link href="/">
                    <Icons.back className="mr-2 h-4 w-4" />
                    Go Back
                </Link>
            </Button>
        </>
    );
};

export default DescriptionCard;
