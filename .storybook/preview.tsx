import type { Preview } from "@storybook/react";
import { Kosugi_Maru } from "next/font/google";
// biome-ignore lint/correctness/noUnusedImports: フォントを読み込むために必要
import React from "react";

const kosugiMaru = Kosugi_Maru({
	variable: "--font-gf-kosugi-maru",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: [
		(Story) => (
			<main className={kosugiMaru.className}>
				<Story />
			</main>
		),
	],
};

export default preview;
