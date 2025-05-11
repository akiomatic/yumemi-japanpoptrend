import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const title = canvas.getByText("都道府県別 人口トレンド");
		await expect(title).toBeInTheDocument();
		await expect(title).toHaveClass("text-md", "sm:text-xl", "font-bold");

		const sourceCodeLink = canvas.getByRole("link");
		await expect(sourceCodeLink).toBeInTheDocument();
		await expect(sourceCodeLink).toHaveAttribute(
			"href",
			"https://github.com/akiomatic/yumemi-japanpoptrend",
		);

		await userEvent.hover(sourceCodeLink);
		await expect(sourceCodeLink).toHaveClass(
			"group",
			"flex",
			"items-center",
			"gap-2",
			"text-sm",
			"text-gray-600",
			"hover:text-gray-900",
		);

		const codeIcon = canvas.getByTestId("code-icon");
		await expect(codeIcon).toBeInTheDocument();
		await expect(codeIcon).toHaveClass(
			"h-4",
			"group-hover:text-blue-500",
			"transition-colors",
			"duration-200",
		);

		const sourceCodeText = canvas.getByText("ソースコード");
		await expect(sourceCodeText).toBeInTheDocument();
		await expect(sourceCodeText).toHaveClass(
			"hidden",
			"sm:block",
			"group-hover:text-blue-500",
			"transition-colors",
			"duration-200",
		);
	},
};
