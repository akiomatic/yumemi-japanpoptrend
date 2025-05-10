import { getPrefectures } from "@/actions/api";
import { PrefectureCheckbox } from "@/app/(home)/_components/prefecture-selector/PrefectureCheckbox";
import { cn } from "@/lib/tailwind-css";

export const PrefectureSelector = async () => {
	const prefectures = await getPrefectures();

	return (
		<ul
			className={cn(
				"grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8",
				"gap-2",
			)}
		>
			{prefectures.map((prefecture) => (
				<PrefectureCheckbox key={prefecture.prefCode} prefecture={prefecture} />
			))}
		</ul>
	);
};
