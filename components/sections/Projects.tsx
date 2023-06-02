import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";
import { ProjectsResultSchema } from "@/schema/project.schema";
import Icon from "@/components/Icon";
import Link from "next/link";
import { animateFade, transition } from "@/framer";
import Motion from "@/components/Motion";
import StaggerMotion from "@/components/StaggerMotion";
import { inDevEnvironment } from "@/lib/utils";

const fetchProjects = async () => {
    const URL = inDevEnvironment()
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.PROD_URL;

    const response = await fetch(`${URL}/api/projects`);
    const data = await response.json();

    return ProjectsResultSchema.parse(data);
};

const Section = async () => {
    // const { results } = await fetchProjects();

    return (
        <section className="section">
            <div className="container_default">
                <div className="flex flex-col space-y-12">
                    <Motion
                        {...animateFade}
                        transition={{ delay: 0.3, ...transition }}
                    >
                        <div className="text-sm font-medium uppercase pl-4 border-l dark-300-700">
                            Projects
                        </div>
                    </Motion>

                    <div>
                        <StaggerMotion
                            targetElement="li"
                            className="grid grid-cols-12 gap-5"
                        >
                            {/* {results.map(
                                ({
                                    id,
                                    title,
                                    description,
                                    github_url,
                                    technologies,
                                    url,
                                }) => (
                                    <li
                                        key={id}
                                        className="col-span-12 sm:col-span-6 p-6 sm:p-8 rounded-md border flex flex-col space-y-8 items-start opacity-0"
                                    >
                                        <div className="flex flex-col space-y-3 items-start">
                                            <div className="text-xl">
                                                {title}
                                            </div>
                                            <p
                                                className={cn(
                                                    "paragraph",
                                                    "text-[16px]"
                                                )}
                                            >
                                                {description}
                                            </p>
                                            <div className="flex space-x-4">
                                                <Link
                                                    href={url}
                                                    target="_blank"
                                                    className="cursor-pointer"
                                                >
                                                    <Icon icon="ph:globe" />
                                                </Link>
                                                <Link
                                                    href={github_url}
                                                    target="_blank"
                                                    className="cursor-pointer"
                                                >
                                                    <Icon icon="simple-icons:github" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-y-2 flex-wrap">
                                            {technologies.map(
                                                ({ id, label }) => (
                                                    <Badge
                                                        key={id}
                                                        label={label}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </li>
                                )
                            )} */}
                        </StaggerMotion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section as unknown as () => JSX.Element;
