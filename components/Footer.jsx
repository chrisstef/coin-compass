export const Footer = () => {
    return (
        <footer className="text-center">
            <div className="p-4 text-center">
                Powered by
                <a
                    className="text-muted-foreground font-medium"
                    href="https://www.coingecko.com/en/api"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    CoinGecko API
                </a>
            </div>
        </footer>
    );
};
