import { CategorySelector } from "@/app/(home)/_components/category-selector";
import { PrefectureSelector } from "@/app/(home)/_components/prefecture-selector";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 max-w-screen-xl mx-auto w-full py-4 px-8 space-y-8">
				<section>
					<h3 className="font-semibold pb-2">都道府県</h3>
					<Suspense fallback={<div>Loading...</div>}>
						<PrefectureSelector />
					</Suspense>
				</section>
				<section>
					<div className="flex justify-between items-center pb-2">
						<h3 className="font-semibold">人口トレンド</h3>
						<CategorySelector />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
