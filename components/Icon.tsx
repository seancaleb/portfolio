"use client";

import { cn } from "@/lib/utils";
import { Icon as IconifyIcon } from "@iconify/react";

const Icon = ({ icon, className }: { icon: string; className?: string }) => {
    return <IconifyIcon icon={icon} className={cn("icon", className)} />;
};

export default Icon;
