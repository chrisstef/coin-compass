import React from "react";
import CoinDetails from "@/components/CoinDetails";
import Shell from "@/components/Shell";

const DetailsPage = ({ params }) => {
    const { id } = params;

    return (
        <Shell>
            <h1 className="text-2xl font-bold md:text-3xl mb-10">Coin Details</h1>
            <CoinDetails id={id} />
        </Shell>
    );
};

export default DetailsPage;
