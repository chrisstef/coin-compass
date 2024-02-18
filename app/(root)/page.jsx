import CoinsTable from "@/components/CoinsTable";
import Shell from "@/components/Shell";
import HeaderText from "@/components/HeaderText";

const HomePage = () => {
    return (
        <Shell>
            <HeaderText subtext="Top-tier price data for leading cryptocurrencies">
                Cryptocurrency Insights
            </HeaderText>
            <CoinsTable />
        </Shell>
    );
};

export default HomePage;
