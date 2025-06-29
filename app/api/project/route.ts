import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';
import { ProjectService } from '@/app/db/services/projectService';

export const POST = async (request: NextRequest) => {

    const validRequest = z
        .object({
            name: z.string().min(1).max(50),
        })
        .strict()
        .transform((v) => {
            return {
                name: DOMPurify.sanitize(v.name),
            };
        });

    const data = validRequest.safeParse(await request.json());

    if (!data.success) {
        return NextResponse.json(data.error, {
            status: 400,
        });
    }

    const projectService = await new ProjectService().waitForRepo();
    const result = await projectService.create(data.data.name);

    return NextResponse.json({ result });
};

export const PUT = async (request: NextRequest) => {

    const validRequest = z
        .object({
            name: z.string().min(1).max(50),
            projectId: z.string().uuid(),
        })
        .strict()
        .transform((v) => {
            return {
                name: DOMPurify.sanitize(v.name),
                projectId: DOMPurify.sanitize(v.projectId),
            };
        });

    const data = validRequest.safeParse(await request.json());

    if (!data.success) {
        return NextResponse.json(data.error, {
            status: 400,
        });
    }

    const projectService = await new ProjectService().waitForRepo();
    await projectService.update(data.data.projectId, data.data.name);

    return NextResponse.json(data);
};

export const GET = async (_: NextRequest) => {

    const projectService = await new ProjectService().waitForRepo();
    const result = await projectService.getAll();

    return NextResponse.json({
        result,
    });
};
