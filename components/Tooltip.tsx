import {
    Tooltip as ShadTooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type TooltipProps = {
    children: React.ReactNode;
    label: string;
};

const Tooltip = ({ children, label }: TooltipProps) => {
    return (
        <TooltipProvider>
            <ShadTooltip>
                <TooltipTrigger className="cursor-default">
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </ShadTooltip>
        </TooltipProvider>
    );
};

export default Tooltip;
