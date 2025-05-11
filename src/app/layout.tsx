import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const kosugiMaru = Kosugi_Maru({
	variable: "--font-gf-kosugi-maru",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export const metadata: Metadata = {
	title: "都道府県別 人口推移グラフ",
	description:
		"都道府県別の人口推移をグラフで比べながら確認できるWebアプリです。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${kosugiMaru.variable} font-kosugi-maru antialiased min-h-screen`}
			>
				<NuqsAdapter>{children}</NuqsAdapter>
			</body>
		</html>
	);
}
