import CoinsList from "@/components/CoinsList";
import Shell from "@/components/Shell";

const HomePage = () => {
    return (
        <Shell>
            <h1 className="text-2xl font-bold md:text-3xl mb-10">Top Coins</h1>
            <CoinsList />
        </Shell>
    );
};

export default HomePage;
