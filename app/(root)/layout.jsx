import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const HomeLayout = ({ children }) => {
    return (
        <div className="h-full">
            <div className="absolute -top-[100px] left-0 -z-10 h-72 w-72 rounded-full bg-blue-400 blur-[500px]" />
            <div className="absolute -top-[100px] left-1/2 -z-10 h-72 w-72 -translate-x-1/2 transform rounded-full bg-pink-400 blur-[500px]" />
            <div className="absolute -top-[100px] right-0 -z-10 h-72 w-72 rounded-full bg-purple-400 blur-[500px]" />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default HomeLayout;
