import { Icons } from "@/components/Icons";

const Spinner = () => {
    return (
        <div className="flex justify-center p-8">
            <Icons.spinner className="animate-spin text-4xl" />
        </div>
    );
};

export default Spinner;
