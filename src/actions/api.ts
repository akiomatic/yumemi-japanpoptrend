"use server";

import { env } from "@/env";
import {
	type TPrefCode,
	populationCompositionPerYearResponseSchema,
	prefecturesResponseSchema,
} from "@/types";
import { unstable_cacheLife as cacheLife } from "next/cache";

const BASE_URL = `${env.YUMEMI_CODECHECK_API_BASE_URL}/api/v1`;

export const getPrefectures = async () => {
	"use cache";
	/**
	 * キャッシュの有効期間を1時間に設定
	 * @see https://nextjs.org/docs/app/api-reference/functions/cacheLife#default-cache-profiles
	 */
	cacheLife("hours");

	const res = await fetch(`${BASE_URL}/prefectures`, {
		headers: {
			"X-API-KEY": env.YUMEMI_CODECHECK_API_KEY,
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error(
			`Failed to fetch prefectures. ${res.status} ${res.statusText}`,
		);
	}

	const prefectures = await res.json();

	return prefecturesResponseSchema.parse(prefectures).result;
};

export const getPopulationCompositionPerYearByPrefCode = async (
	prefCode: TPrefCode,
) => {
	"use cache";
	/**
	 * キャッシュの有効期間を1時間に設定
	 * @see https://nextjs.org/docs/app/api-reference/functions/cacheLife#default-cache-profiles
	 */
	cacheLife("hours");

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
			`Failed to fetch population composition per year by prefCode: ${prefCode}. ${res.status} ${res.statusText}`,
		);
	}

	const populationCompositionPerYear = await res.json();

	return populationCompositionPerYearResponseSchema.parse(
		populationCompositionPerYear,
	).result;
};
