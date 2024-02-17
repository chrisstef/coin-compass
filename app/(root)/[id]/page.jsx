import React from "react";
import CoinDetails from "@/components/CoinDetails";
import Shell from "@/components/Shell";
import DescriptionCard from "@/components/DescriptionCard";
import HeaderText from "@/components/HeaderText";

const DetailsPage = ({ params }) => {
    const { id } = params;

    return (
        <Shell>
            <HeaderText subtext="Price shifts through percentage adjustments.">
                {id.charAt(0).toUpperCase() + id.slice(1)} overview
            </HeaderText>
            <CoinDetails id={id} />
            <DescriptionCard id={id} />
        </Shell>
    );
};

export default DetailsPage;
