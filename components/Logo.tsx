"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Logo = () => {
    const lenis = useLenis();
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = () => {
        if (pathname !== "/") {
            router.push("/");
        } else {
            lenis.scrollTo("#hero");
        }
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div
            className="text-lg font-bold cursor-pointer"
            onClick={handleNavigation}
        >
            S — N
        </div>
    );
};

export default Logo;
