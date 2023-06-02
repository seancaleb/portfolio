import { Mail } from "lucide-react";
import { animateFade, transition } from "@/framer";
import Motion from "@/components/Motion";
import StaggerMotion from "@/components/StaggerMotion";

const Section = () => {
    return (
        <section className="section">
            <div className="container_default">
                <div className="flex flex-col space-y-12">
                    <Motion
                        {...animateFade}
                        transition={{ delay: 0.3, ...transition }}
                    >
                        <div className="text-sm font-medium uppercase pl-4 border-l dark-300-700">
                            About
                        </div>
                    </Motion>

                    <StaggerMotion
                        targetElement="div"
                        className="flex flex-col space-y-8"
                    >
                        <div className="paragraph opacity-0">
                            I&apos;m a passionate{" "}
                            <span className="emphasize">front-end</span>{" "}
                            developer{" "}
                            <span className="emphasize">
                                specializing in React and TypeScript
                            </span>{" "}
                            based in the Philippines. I love developing
                            responsive web applications and user interfaces that
                            offer the best experience for users. I mainly focus
                            on the most common essential tools/libraries used in
                            the{" "}
                            <span className="text-[#1FAFD6] dark:text-[#71D1EB]">
                                React
                            </span>{" "}
                            ecosystem by most developers in the React community.
                        </div>

                        <div className="paragraph opacity-0">
                            Currently, I&apos;m exploring backend programming or
                            improving my front-end skill set. I&apos;m also open
                            to any front-end role where I can use my skills to
                            help contribute to any existing codebase and, at the
                            same time, learn best practices from experienced
                            developers.
                        </div>

                        <div className="flex space-x-3 opacity-0">
                            <Mail size={24} className="icon animate-pulse" />
                            <a
                                href="mailto:scmubias@gmail.com"
                                className="hover:underline"
                            >
                                scmubias@gmail.com
                            </a>
                        </div>
                    </StaggerMotion>
                </div>
            </div>
        </section>
    );
};

export default Section;
