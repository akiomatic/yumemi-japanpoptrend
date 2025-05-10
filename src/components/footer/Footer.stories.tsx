import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
	title: "Components/Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const copyrightText = canvas.getByText("© 2025 akiomatic");
		await expect(copyrightText).toBeInTheDocument();
	},
};
