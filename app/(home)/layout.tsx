import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const helveticaNeue = localFont({
    src: [
        {
            path: "../../public/fonts/HelveticaNeueCyr-Roman.otf",
            weight: "400",
        },
        {
            path: "../../public/fonts/HelveticaNeueCyr-Medium.otf",
            weight: "500",
        },
        {
            path: "../../public/fonts/HelveticaNeueCyr-Bold.otf",
            weight: "700",
        },
    ],
    variable: "--font-helvetica-neue",
});

export const metadata = {
    title: "Sean Caleb - React Developer",
    description:
        "A self-taught front-end web application developer specializing in React and TypeScript. Explore my projects and learn more about my skills and expertise.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    helveticaNeue.variable,
                    "font-sans relative antialiased"
                )}
            >
                <Providers>
                    <Header />
                    <main className="main_padding">{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
