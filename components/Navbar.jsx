import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
    return (
        <nav className="px-4 md-px-8 w-full h-16 flex items-center">
            <div className="flex max-w-screen-4xl w-full items-center">
                <div className="md:flex">
                    <Link href="/">
                        <div className="hover:opacity-75 transition duration-200 items-center gap-x-2 md:flex">
                            <p className="text-lg font-extrabold">
                                Coin Compass
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <ModeToggle />
            </div>
        </nav>
    );
};
