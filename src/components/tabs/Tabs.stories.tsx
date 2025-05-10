import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";
import { expect } from "@storybook/test";
import { within } from "@storybook/test";
import { useState } from "react";
import { Tabs } from "./Tabs";

type TabValue = "tab1" | "tab2" | "tab3";
type OptionValue = "option1" | "option2" | "option3" | "option4";

const meta: Meta<typeof Tabs<TabValue>> = {
	title: "Components/Tabs",
	component: Tabs,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs<TabValue>>;

const TabsWithState = () => {
	const [selected, setSelected] = useState<TabValue>("tab1");
	const fields = [
		{ label: "タブ1", value: "tab1" as const },
		{ label: "タブ2", value: "tab2" as const },
		{ label: "タブ3", value: "tab3" as const },
	];

	return (
		<Tabs<TabValue>
			fields={fields}
			selected={selected}
			setSelected={setSelected}
		/>
	);
};

export const Default: Story = {
	render: () => <TabsWithState />,
};

export const WithCustomFields: Story = {
	render: () => {
		const [selected, setSelected] = useState<OptionValue>("option1");
		const fields = [
			{ label: "オプション1", value: "option1" as const },
			{ label: "オプション2", value: "option2" as const },
			{ label: "オプション3", value: "option3" as const },
			{ label: "オプション4", value: "option4" as const },
		];

		return (
			<Tabs<OptionValue>
				fields={fields}
				selected={selected}
				setSelected={setSelected}
			/>
		);
	},
};

export const InteractiveTabs: Story = {
	render: () => <TabsWithState />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const tab2 = canvas.getByLabelText("タブ2を選択");
		await userEvent.click(tab2);

		expect(tab2).toHaveAttribute("aria-checked", "true");

		const tab3 = canvas.getByLabelText("タブ3を選択");
		await userEvent.click(tab3);

		expect(tab3).toHaveAttribute("aria-checked", "true");
		expect(tab2).toHaveAttribute("aria-checked", "false");
	},
};

export const KeyboardNavigation: Story = {
	render: () => <TabsWithState />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const tab1 = canvas.getByLabelText("タブ1を選択");
		tab1.focus();

		await userEvent.keyboard("{ArrowRight}");
		const tab2 = canvas.getByLabelText("タブ2を選択");
		expect(tab2).toHaveFocus();

		await userEvent.keyboard("{ArrowRight}");
		const tab3 = canvas.getByLabelText("タブ3を選択");
		expect(tab3).toHaveFocus();

		await userEvent.keyboard("{ArrowLeft}");
		expect(tab2).toHaveFocus();
	},
};

export const AccessibilityTest: Story = {
	render: () => <TabsWithState />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const tab1 = canvas.getByLabelText("タブ1を選択");
		const tab2 = canvas.getByLabelText("タブ2を選択");
		const tab3 = canvas.getByLabelText("タブ3を選択");

		expect(tab1).toHaveAttribute("aria-selected", "true");

		await userEvent.click(tab2);
		expect(tab2).toHaveAttribute("aria-selected", "true");
		expect(tab1).toHaveAttribute("aria-selected", "false");

		await userEvent.keyboard("{ArrowRight}");
		expect(tab3).toHaveAttribute("aria-selected", "true");
	},
};
