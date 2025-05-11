import {
	getPopulationCompositionPerYearByPrefCode,
	getPrefectures,
} from "@/actions/api";
import { PopulationTrendChartClient } from "@/app/(home)/_components/population-trend-graph/PopulationTrendChartClient";
import type { TChartData } from "@/app/(home)/_components/population-trend-graph/PopulationTrendChartClient";
import { loadSearchParams } from "@/lib/search-params";
import { categories } from "@/types";
import type { SearchParams } from "nuqs";
import { Suspense } from "react";

type TPopulationTrendChartWrapperProps = {
	searchParams: Promise<SearchParams>;
};

export const PopulationTrendChartWrapper = async ({
	searchParams,
}: TPopulationTrendChartWrapperProps) => {
	const { prefCodes, category } = await loadSearchParams(searchParams);

	const [prefectures, populationTrendData] = await Promise.all([
		getPrefectures(),
		Promise.all(
			prefCodes.map((prefCode) =>
				getPopulationCompositionPerYearByPrefCode(prefCode).then((data) => ({
					prefCode,
					data: data.data.filter((d) => d.label === categories[category]),
				})),
			),
		),
	]);

	// 都道府県データの整形
	const prefData = prefectures
		.filter((pref) => prefCodes.includes(pref.prefCode))
		.map(({ prefCode, prefName }) => ({ prefCode, prefName }));

	// グラフデータの整形
	const years = new Set<number>();
	const yearDataMap = new Map<number, Record<string, number>>();

	for (const { prefCode, data } of populationTrendData) {
		for (const { data: yearData } of data) {
			for (const { year, value } of yearData) {
				years.add(year);
				const yearRecord = yearDataMap.get(year) ?? {};
				yearDataMap.set(year, { ...yearRecord, [String(prefCode)]: value });
			}
		}
	}

	const chartData: TChartData[] = Array.from(years)
		.sort((a, b) => a - b)
		.map((year) => ({
			year,
			...yearDataMap.get(year),
		}));

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<PopulationTrendChartClient prefData={prefData} chartData={chartData} />
		</Suspense>
	);
};
