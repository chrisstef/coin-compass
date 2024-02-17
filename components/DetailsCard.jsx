import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const DetailsCard = ({ title, value, unit }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icons.dollar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="lg:text-lg xl:text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{unit}</p>
            </CardContent>
        </Card>
    );
};

export default DetailsCard;
