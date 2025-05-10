"use client";

import { Tabs } from "@/components/tabs";
import { populationSearchParams } from "@/lib/search-params";
import { categoryKeys } from "@/types";
import { categoriesLabels } from "@/types/categories";
import { useQueryState } from "nuqs";

export const CategorySelector = () => {
	const [selectedCategory, setSelectedCategory] = useQueryState(
		"category",
		populationSearchParams.category,
	);

	const fields = categoryKeys.map((key, index) => ({
		label: categoriesLabels[index],
		value: key,
	}));

	return (
		<Tabs
			fields={fields}
			selected={selectedCategory}
			setSelected={setSelectedCategory}
		/>
	);
};
