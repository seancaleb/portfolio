import { NextResponse } from "next/server";
import { ProjectsResultResponseSchema } from "@/schema/project.schema";
import { nanoid } from "nanoid";
import projects from "./data.json";

export const GET = (request: Request) => {
    const ProjectsResult = ProjectsResultResponseSchema.transform(
        ({ projects }) => ({
            results: projects.map((project) => ({
                ...project,
                id: nanoid(),
                technologies: project.technologies.map((label) => ({
                    id: nanoid(),
                    label,
                })),
            })),
        })
    );

    return NextResponse.json(ProjectsResult.parse(projects));
};
