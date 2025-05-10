"use server";

import { env } from "@/env";
import { prefecturesResponseSchema } from "@/types";

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
