import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const badgeVariants = cva(
    "inline-flex rounded-md text-sm font-medium mr-2 leading-none",
    {
        variants: {
            variant: {
                default: "text-slate-500 bg-slate-700 bg-opacity-20",
                outline: "text-slate-500 bg-opacity-20 border",
            },
            size: {
                default: "p-2",
                md: "p-2 text-md",
                lg: "p-4 text-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    label?: string;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, size, label = "Badge", ...props }, ref) => {
        return (
            <div
                className={cn(badgeVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {label}
            </div>
        );
    }
);

Badge.displayName = "Badge";

export default Badge;
