import { cn } from "@/lib/utils";

const Shell = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-center p-16 items-center gap-8",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Shell;
