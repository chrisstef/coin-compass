import { cn } from "@/lib/utils";

const Shell = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-center p-16 items-center gap-12",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Shell;
