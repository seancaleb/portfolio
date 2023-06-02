"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ToggleDarkMode = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const renderThemeChanger = () => {
        if (!isMounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div
                    className="icon_wrapper"
                    role="button"
                    onClick={() => setTheme("light")}
                >
                    <Sun className="icon" />
                </div>
            );
        } else {
            return (
                <div
                    className="icon_wrapper"
                    role="button"
                    onClick={() => setTheme("dark")}
                >
                    <Moon className="icon" />
                </div>
            );
        }
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return <>{renderThemeChanger()}</>;
};

export default ToggleDarkMode;
