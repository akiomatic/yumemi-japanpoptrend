import { categoryKeys, prefCodeSchema } from "@/types";
import {
	createLoader,
	createParser,
	parseAsArrayOf,
	parseAsStringLiteral,
} from "nuqs/server";

const parseAsPrefCode = createParser({
	parse(queryValue) {
		if (Number.isNaN(Number(queryValue))) return null;
		return prefCodeSchema.parse(Number(queryValue));
	},
	serialize(value) {
		return value.toString();
	},
});

export const populationSearchParamKeys = {
	prefCodes: "prefCodes",
	category: "category",
} as const;

export const populationSearchParams = {
	[populationSearchParamKeys.prefCodes]: parseAsArrayOf(parseAsPrefCode)
		.withDefault([])
		.withOptions({
			shallow: false,
		}),
	[populationSearchParamKeys.category]: parseAsStringLiteral(categoryKeys)
		.withDefault("total")
		.withOptions({
			shallow: false,
		}),
};

export const loadSearchParams = createLoader(populationSearchParams);
