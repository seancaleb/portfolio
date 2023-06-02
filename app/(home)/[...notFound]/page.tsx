import { notFound } from "next/navigation";

export const metadata = {
    title: "404 - Page not found",
    description: "The requested resource is not available.",
};

const NotFoundCatchAll = () => {
    notFound();
};

export default NotFoundCatchAll;
