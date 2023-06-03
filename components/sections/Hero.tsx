import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Icon from "@/components/Icon";
import Link from "next/link";
import Motion from "@/components/Motion";
import { animateFadeUp, animateFade, transition } from "@/framer";

const Section = () => {
    return (
        <section
            id="hero"
            className="py-40 sm:py-64 h-doc-height sm:h-auto flex items-center sm:block"
        >
            <div className="container_default relative">
                <Motion
                    {...animateFadeUp}
                    transition={{ delay: 0.6, ...transition }}
                >
                    <div className="absolute top-0 left-0">
                        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-56 h-56 rounded-full bg-[#61DAFB] blur-3xl -z-10 bg-opacity-60 dark:bg-opacity-5 pointer-events-none" />
                        <div className="absolute top-[50%] left-[50%] transform translate-x-[-10%] translate-y-[-90%] w-48 h-48 rounded-full bg-[#618DFB] blur-3xl -z-20 bg-opacity-60 dark:bg-opacity-5 pointer-events-none" />
                        <div className="absolute top-[50%] left-[50%] transform translate-x-[-90%] translate-y-[-10%] w-48 h-48 rounded-full bg-[#61FBCF] blur-3xl -z-30 bg-opacity-60 dark:bg-opacity-5 pointer-events-none" />
                    </div>
                </Motion>
                <div className="flex flex-col space-y-6">
                    <Motion
                        {...animateFadeUp}
                        transition={{ delay: 0.6, ...transition }}
                    >
                        <h1 className="heading_one">
                            a self-taught{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1F53D6] to-[#1FD6A2] dark:from-[#7093EB] dark:to-[#70EBC8]">
                                front-end
                            </span>{" "}
                            developer
                        </h1>
                    </Motion>
                    <Motion
                        {...animateFadeUp}
                        transition={{ delay: 0.7, ...transition }}
                    >
                        <p className="paragraph">
                            I&apos;m a self-taught developer with strong passion
                            in developing responsive web apps and creating
                            reusable user interfaces.
                        </p>
                    </Motion>
                    <Motion
                        {...animateFade}
                        transition={{ delay: 1.2, ...transition }}
                    >
                        <div className="flex items-center flex-wrap gap-y-6">
                            <Button
                                variant="outline"
                                className="text-base py-3 px-[18px] h-auto dark-300-700 mr-8 whitespace-nowrap"
                                asChild
                            >
                                <Link href="/resume" target="_blank">
                                    <Download
                                        size={24}
                                        className="mr-3 dark-300-700"
                                    />
                                    Download resume
                                </Link>
                            </Button>

                            <div className="flex space-x-4">
                                <Link
                                    href="https://github.com/seancaleb"
                                    className="cursor-pointer"
                                >
                                    <Icon icon="simple-icons:github" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/sean-caleb-ubias-b31018168/"
                                    className="cursor-pointer"
                                >
                                    <Icon icon="simple-icons:linkedin" />
                                </Link>
                            </div>
                        </div>
                    </Motion>
                </div>
            </div>
        </section>
    );
};

export default Section;
