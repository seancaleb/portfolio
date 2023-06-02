import { z } from "zod";

const SkillSchema = z.object({
    key: z.string(),
    label: z.string(),
});

export const SkillsResultResponseSchema = z.object({
    skills: z.array(SkillSchema),
});

export const SkillsResultSchema = z.object({
    results: z.array(
        SkillSchema.extend({
            id: z.string(),
        })
    ),
});

export type SkillsResultType = z.infer<typeof SkillsResultSchema>;
