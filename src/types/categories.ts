export const categoryKeys = ["total", "young", "working", "elderly"] as const;
export const categoriesLabels = [
	"総人口",
	"年少人口",
	"生産年齢人口",
	"老年人口",
] as const;

export const categories: Record<TCategories, TCategoriesLabels> = {
	[categoryKeys[0]]: categoriesLabels[0],
	[categoryKeys[1]]: categoriesLabels[1],
	[categoryKeys[2]]: categoriesLabels[2],
	[categoryKeys[3]]: categoriesLabels[3],
};

export type TCategories = (typeof categoryKeys)[number];
export type TCategoriesLabels = (typeof categoriesLabels)[number];
