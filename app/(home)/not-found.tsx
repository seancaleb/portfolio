import { cn } from "@/lib/utils";
import Link from "next/link";
import Motion from "@/components/Motion";
import { animateFadeUp, animateFade, transition } from "@/framer";

const NotFound = () => {
    return (
        <div className="py-40 sm:py-64 absolute top-0 left-8 right-8 bottom-0 h-doc-height sm:min-h-screen z-20 bg-background">
            <div className="w-full h-full flex items-center sm:items-start justify-center">
                <div className="flex flex-col space-y-6 items-center text-center">
                    <Motion
                        {...animateFadeUp}
                        transition={{ delay: 0.6, ...transition }}
                    >
                        <h1 className="heading_one">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1F53D6] to-[#1FD6A2] dark:from-[#7093EB] dark:to-[#70EBC8]">
                                404
                            </span>{" "}
                            — page not found
                        </h1>
                    </Motion>
                    <Motion
                        {...animateFade}
                        transition={{ delay: 1.1, ...transition }}
                    >
                        <div className="group relative overflow-hidden">
                            <Link
                                href="/"
                                className={cn(
                                    "paragraph",
                                    "text-base relative z-10 block font-medium"
                                )}
                            >
                                Back to home
                            </Link>
                            <div className="absolute top-0 left-0 bottom-0 right-0 pb-[2px] border-b border-b-slate-500 transform -translate-x-[100%] transition duration-300 group-hover:translate-x-0" />
                        </div>
                    </Motion>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
