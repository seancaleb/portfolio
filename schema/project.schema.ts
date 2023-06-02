import { z } from "zod";

const ProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    github_url: z.string().url(),
    technologies: z.array(z.string()),
});

export const ProjectsResultResponseSchema = z.object({
    projects: z.array(ProjectSchema),
});

export const ProjectsResultSchema = z.object({
    results: z.array(
        ProjectSchema.omit({ technologies: true }).extend({
            id: z.string(),
            technologies: z.array(
                z.object({
                    id: z.string(),
                    label: z.string(),
                })
            ),
        })
    ),
});

export type ProjectsResultType = z.infer<typeof ProjectsResultSchema>;
