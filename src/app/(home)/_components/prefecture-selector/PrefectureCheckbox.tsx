"use client";

import { Checkbox } from "@/components/checkbox/Checkbox";
import {
	populationSearchParamKeys,
	populationSearchParams,
} from "@/lib/search-params";
import type { TPrefCode, TPrefecture } from "@/types";
import { useQueryState } from "nuqs";

type TPrefectureCheckboxProps = {
	prefecture: TPrefecture;
};

export const PrefectureCheckbox = ({
	prefecture,
}: TPrefectureCheckboxProps) => {
	const [selectedPrefectures, setSelectedPrefectures] = useQueryState(
		populationSearchParamKeys.prefCodes,
		populationSearchParams.prefCodes,
	);

	const addPrefecture = (prefCode: TPrefCode) => {
		setSelectedPrefectures([...selectedPrefectures, prefCode]);
	};

	const removePrefecture = (prefCode: TPrefCode) => {
		setSelectedPrefectures(
			selectedPrefectures.filter((code) => code !== prefCode),
		);
	};

	const handlePrefectureChange = (checked: boolean) => {
		if (checked) {
			addPrefecture(prefecture.prefCode);
		} else {
			removePrefecture(prefecture.prefCode);
		}
	};

	const isChecked = selectedPrefectures.includes(prefecture.prefCode);
	const checkboxId = `prefecture-checkbox-${prefecture.prefCode}`;

	return (
		<Checkbox
			checked={isChecked}
			onChange={handlePrefectureChange}
			label={prefecture.prefName}
			id={checkboxId}
			className="flex justify-center items-center"
		/>
	);
};
