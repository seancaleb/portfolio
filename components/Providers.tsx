"use client";

import { ThemeProvider } from "next-themes";
import { Lenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

type ProvidersProps = {
    children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
    const lenisOptions = {
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    };

    useEffect(() => {
        const documentHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
        };

        window.addEventListener("resize", documentHeight);

        documentHeight();

        return () => {
            window.removeEventListener("resize", documentHeight);
        };
    }, []);

    return (
        <ThemeProvider enableSystem attribute="class">
            <Lenis root options={lenisOptions}>
                {children}
            </Lenis>
        </ThemeProvider>
    );
};

export default Providers;
