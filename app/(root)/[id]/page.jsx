import { notFound } from "next/navigation";
import CoinDetailsCards from "@/components/CoinDetailsCards";
import Shell from "@/components/Shell";
import DescriptionCard from "@/components/DescriptionCard";
import HeaderText from "@/components/HeaderText";

const DetailsPage = async ({ params }) => {
    const { id } = params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coins/${id}`
    );
    const coinDetails = await res.json();

    if (!coinDetails || res.status === 404) {
        return notFound();
    }

    return (
        <Shell>
            <HeaderText
                subtext={`Explore ${coinDetails.symbol.toUpperCase()} percentage adjustments.`}
            >
                {coinDetails.name} overview
            </HeaderText>
            <CoinDetailsCards coinDetails={coinDetails} />
            <DescriptionCard coinDetails={coinDetails} />
        </Shell>
    );
};

export default DetailsPage;
