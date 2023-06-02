import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function inDevEnvironment() {
    let inDevEnvironment = false;

    if (process && process.env.NODE_ENV === "development") {
        inDevEnvironment = true;
    }

    return inDevEnvironment;
}
