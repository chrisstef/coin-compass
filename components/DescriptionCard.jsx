"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const DescriptionCard = ({ coinDetails }) => {
    const descriptionHtml = coinDetails.description
        ? coinDetails.description.replace(
              /<a href="(.*?)">(.*?)<\/a>/g,
              '<a href="$1" target="_blank" rel="noreferrer" class="text-blue-500 hover:text-blue-700">$2</a>'
          )
        : null;

    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>What is {coinDetails.name}?</CardTitle>
                    {coinDetails.description ? (
                        <CardDescription>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: descriptionHtml,
                                }}
                            />
                        </CardDescription>
                    ) : (
                        <CardDescription>
                            Oops! It seems there's no description available for{" "}
                            {coinDetails.name} at the moment.
                        </CardDescription>
                    )}{" "}
                </CardHeader>
            </Card>
            <Button variant="outline" asChild>
                <Link href="/">
                    <Icons.back className="mr-2 h-4 w-4" />
                    Go Back
                </Link>
            </Button>
        </>
    );
};

export default DescriptionCard;
