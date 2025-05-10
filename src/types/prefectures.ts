import { z } from "zod";

export const prefectureSchema = z.object({
	prefCode: z.number(),
	prefName: z.string(),
});

export const prefecturesResponseSchema = z.object({
	message: z.null(),
	result: z.array(prefectureSchema),
});

export type TPrefecture = z.infer<typeof prefectureSchema>;
export type TPrefecturesResponse = z.infer<typeof prefecturesResponseSchema>;
