import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import { SkillsResultSchema } from "@/schema/skill.schema";
import Motion from "@/components/Motion";
import StaggerMotion from "@/components/StaggerMotion";
import { animateFade, transition } from "@/framer";
import { inDevEnvironment } from "@/lib/utils";

const fetchSkills = async () => {
    const URL = inDevEnvironment()
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.PROD_URL;

    const response = await fetch(`${URL}/api/skills`);
    const data = await response.json();

    return SkillsResultSchema.parse(data);
};

const Section = async () => {
    const { results } = await fetchSkills();

    return (
        <section className="section">
            <div className="container_default">
                <div className="flex flex-col space-y-12">
                    <Motion
                        {...animateFade}
                        transition={{ delay: 0.3, ...transition }}
                    >
                        <div className="text-sm font-medium uppercase pl-4 border-l dark-300-700">
                            Skills
                        </div>
                    </Motion>

                    <Motion
                        {...animateFade}
                        transition={{ delay: 0.8, ...transition }}
                    >
                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(64px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(128px,_1fr))] gap-12">
                            {results.map(({ id, key, label }) => (
                                <li
                                    key={id}
                                    className="max-w-[48px] flex items-center"
                                >
                                    <Tooltip label={label}>
                                        <Icon
                                            icon={`simple-icons:${key}`}
                                            className="text-4xl sm:text-[44px]"
                                        />
                                    </Tooltip>
                                </li>
                            ))}
                        </div>
                    </Motion>
                </div>
            </div>
        </section>
    );
};

export default Section as unknown as () => JSX.Element;
