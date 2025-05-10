import { categoriesLabels } from "@/types/categories";
import { z } from "zod";

const populationDataTotalSchema = z.object({
	year: z.number(),
	value: z.number(),
});

const populationDataWithRateSchema = z.object({
	year: z.number(),
	value: z.number(),
	rate: z.number(),
});

export const populationCompositionPerYearSchema = z.discriminatedUnion(
	"label",
	[
		z.object({
			label: z.literal(categoriesLabels[0]),
			data: z.array(populationDataTotalSchema),
		}),
		z.object({
			label: z.enum([
				categoriesLabels[1],
				categoriesLabels[2],
				categoriesLabels[3],
			]),
			data: z.array(populationDataWithRateSchema),
		}),
	],
);

export const populationCompositionPerYearResponseSchema = z.object({
	message: z.null(),
	result: z.object({
		boundaryYear: z.number(),
		data: z.array(populationCompositionPerYearSchema),
	}),
});

export type TPopulationCompositionPerYear = z.infer<
	typeof populationCompositionPerYearSchema
>;
export type TPopulationCompositionPerYearResponse = z.infer<
	typeof populationCompositionPerYearResponseSchema
>;
