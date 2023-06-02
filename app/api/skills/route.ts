import { NextResponse } from "next/server";
import { SkillsResultResponseSchema } from "@/schema/skill.schema";
import { nanoid } from "nanoid";
import skills from "./data.json";

export const GET = async (request: Request) => {
    const SkillsResult = SkillsResultResponseSchema.transform(({ skills }) => ({
        results: skills.map((skill) => ({ id: nanoid(), ...skill })),
    }));

    return NextResponse.json(SkillsResult.parse(skills));
};
