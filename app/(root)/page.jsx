import CoinsTable from "@/components/CoinsTable";
import Shell from "@/components/Shell";
import HeaderText from "@/components/HeaderText";

const HomePage = () => {
    return (
        <Shell>
            <HeaderText subtext="High quality price data on the top coins.">
                Cryptocurrency Insights
            </HeaderText>
            <CoinsTable />
        </Shell>
    );
};

export default HomePage;
