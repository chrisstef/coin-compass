import CoinsList from "@/components/CoinsList";
import Shell from "@/components/Shell";
import HeaderText from "@/components/HeaderText";

const HomePage = () => {
    return (
        <Shell>
            <HeaderText subtext="High quality price data on the top coins.">
                Cryptocurrency Insights
            </HeaderText>
            <CoinsList />
        </Shell>
    );
};

export default HomePage;
