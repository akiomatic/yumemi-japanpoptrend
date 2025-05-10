import { CodeIcon } from "lucide-react";
import Link from "next/link";

const SOURCE_CODE_URL = "https://github.com/akiomatic/yumemi-japanpoptrend";

export const Header = () => {
	return (
		<header className="flex items-center justify-between py-4 px-8 lg:px-24 border-b border-b-gray-300">
			<h1 className="text-md sm:text-xl font-bold">都道府県別 人口トレンド</h1>
			<nav>
				<Link
					href={SOURCE_CODE_URL}
					className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
				>
					<CodeIcon className="h-4 group-hover:text-blue-500 transition-colors duration-200" />
					<span className="hidden sm:block group-hover:text-blue-500 transition-colors duration-200">
						ソースコード
					</span>
				</Link>
			</nav>
		</header>
	);
};
