import * as React from "react";
import { cn } from "@/lib/utils";

const Shell = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-center p-20 items-center gap-8",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Shell;
