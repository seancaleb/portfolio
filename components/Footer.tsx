import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="main_padding border-t">
            <div className="py-12 max-w-[976px] mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className={cn("paragraph", "text-sm")}>
                    Designed in{" "}
                    <Link
                        href="https://www.figma.com/"
                        target="_blank"
                        className="dark-300-700 hover:underline"
                    >
                        Figma
                    </Link>{" "}
                    and built in{" "}
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        className="dark-300-700 hover:underline"
                    >
                        Next.js
                    </Link>{" "}
                    with{" "}
                    <Link
                        href="https://tailwindcss.com/"
                        target="_blank"
                        className="dark-300-700 hover:underline"
                    >
                        Tailwind CSS
                    </Link>{" "}
                </p>

                <p className={cn("paragraph", "text-sm")}>
                    &copy; Sean Caleb 2023
                </p>
            </div>
        </footer>
    );
};

export default Footer;
