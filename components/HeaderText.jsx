const HeaderText = ({ children, subtext, className }) => {
    return (
        <div className={`space-y-2 text-center ${className}`}>
            <h1 className="text-3xl font-bold lg:text-4xl">{children}</h1>
            {subtext && (
                <h2 className="font-light text-muted-foreground lg:text-lg">
                    {subtext}
                </h2>
            )}
        </div>
    );
};

export default HeaderText;
