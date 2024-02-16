import CoinsList from "@/components/CoinsList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-10">Top Coins</h1>
            <CoinsList />
        </main>
    );
}
