import React from "react";
import CoinDetailsCards from "@/components/CoinDetailsCards";
import Shell from "@/components/Shell";
import DescriptionCard from "@/components/DescriptionCard";
import HeaderText from "@/components/HeaderText";
import { notFound } from "next/navigation";

const DetailsPage = async ({ params }) => {
    const { id } = params;

    if (!id) {
        notFound();
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coins/${id}`
    );
    const coinDetails = await res.json();

    if (!coinDetails || res.status === 404) {
        return notFound();
    }

    return (
        <Shell>
            <HeaderText subtext="Price shifts through percentage adjustments.">
                {id.charAt(0).toUpperCase() + id.slice(1)} overview
            </HeaderText>
            <CoinDetailsCards coinDetails={coinDetails} />
            <DescriptionCard coinDetails={coinDetails} />
        </Shell>
    );
};

export default DetailsPage;
