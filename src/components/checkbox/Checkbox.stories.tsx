import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Components/Checkbox",
		checked: false,
		onChange: () => {},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");
		await expect(checkbox).toHaveAttribute("aria-checked", "false");
	},
};

export const Checked: Story = {
	args: {
		label: "チェック済み",
		checked: true,
		onChange: () => {},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");
		await expect(checkbox).toHaveAttribute("aria-checked", "true");
	},
};

export const WithCustomId: Story = {
	args: {
		label: "カスタムID",
		id: "custom-checkbox",
		checked: false,
		onChange: () => {},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");
		await expect(checkbox).toHaveAttribute("id", "custom-checkbox");
	},
};

export const WithCustomClassName: Story = {
	args: {
		label: "カスタムクラス",
		className: "bg-blue-100",
		checked: false,
		onChange: () => {},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");
		await expect(checkbox).toHaveClass("bg-blue-100");
	},
};

export const Disabled: Story = {
	args: {
		label: "無効化",
		checked: false,
		disabled: true,
		onChange: () => {},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");

		// 無効化状態の確認
		await expect(checkbox).toHaveAttribute("aria-disabled", "true");
	},
};
