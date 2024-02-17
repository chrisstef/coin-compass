export const Footer = () => {
    return (
        <footer className="text-center lg:text-left right-0 left-0 bottom-0">
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
