import "@/app/globals.css";

export const metadata = {
    title: "Sean Caleb - Resume",
    description: "Learn more about from my resume.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;
