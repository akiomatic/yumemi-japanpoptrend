import { z } from "zod";

export const prefCodeSchema = z.number().brand("PrefCode");

export const prefectureSchema = z.object({
	prefCode: prefCodeSchema,
	prefName: z.string(),
});

export const prefecturesResponseSchema = z.object({
	message: z.null(),
	result: z.array(prefectureSchema),
});

export type TPrefCode = z.infer<typeof prefCodeSchema>;
export type TPrefecture = z.infer<typeof prefectureSchema>;
export type TPrefecturesResponse = z.infer<typeof prefecturesResponseSchema>;
