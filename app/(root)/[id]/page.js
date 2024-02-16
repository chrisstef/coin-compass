import React from "react";
import CoinDetails from "@/components/CoinDetails";

export default function DetailsPage({ params }) {
    const { id } = params;

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-10">Coin Details</h1>
            <CoinDetails id={id} />
        </main>
    );
}
