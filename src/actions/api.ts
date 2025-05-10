"use server";

import { env } from "@/env";
import {
	type TPrefCode,
	populationCompositionPerYearResponseSchema,
	prefecturesResponseSchema,
} from "@/types";

const BASE_URL = `${env.YUMEMI_CODECHECK_API_BASE_URL}/api/v1`;

export const getPrefectures = async () => {
	"use cache";

	const res = await fetch(`${BASE_URL}/prefectures`, {
		headers: {
			"X-API-KEY": env.YUMEMI_CODECHECK_API_KEY,
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error("Failed to fetch prefectures");
	}

	const prefectures = await res.json();

	return prefecturesResponseSchema.parse(prefectures).result;
};

export const getPopulationCompositionPerYearByPrefCode = async (
	prefCode: TPrefCode,
) => {
	"use cache";

	const res = await fetch(
		`${BASE_URL}/population/composition/perYear?prefCode=${prefCode}`,
		{
			headers: {
				"X-API-KEY": env.YUMEMI_CODECHECK_API_KEY,
				"Content-Type": "application/json",
			},
		},
	);

	if (!res.ok) {
		throw new Error(
			`Failed to fetch population composition per year by prefCode: ${prefCode}`,
		);
	}

	const populationCompositionPerYear = await res.json();

	return populationCompositionPerYearResponseSchema.parse(
		populationCompositionPerYear,
	).result;
};
