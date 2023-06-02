"use client";

import { ThemeProvider } from "next-themes";
import { Lenis } from "@studio-freight/react-lenis";

type ProvidersProps = {
    children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
    const lenisOptions = {
        smoothTouch: true,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    };

    return (
        <ThemeProvider enableSystem attribute="class">
            <Lenis root options={lenisOptions}>
                {children}
            </Lenis>
        </ThemeProvider>
    );
};

export default Providers;
