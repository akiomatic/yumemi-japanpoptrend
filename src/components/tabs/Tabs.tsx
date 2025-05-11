"use client";

import { cn } from "@/lib/tailwind-css";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";

type TTabProps<T extends string> = {
	fields: {
		label: string;
		value: T;
	}[];
	selected: T;
	setSelected: (selected: T) => void;
	className?: string;
};

export const Tabs = <T extends string>({
	fields,
	selected,
	setSelected,
	className,
}: TTabProps<T>) => {
	return (
		<RadioGroup
			value={selected}
			onChange={setSelected}
			className={cn("flex gap-2", className)}
		>
			{fields.map((field) => (
				<Field key={field.value}>
					<Radio
						value={field.value}
						className="peer sr-only"
						aria-label={`${field.label}を選択`}
						aria-checked={selected === field.value}
					/>
					<Label
						className={cn(
							"inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ease-in-out cursor-pointer transform hover:scale-105 active:scale-95",
							selected === field.value
								? "bg-black text-white border-black hover:bg-gray-800"
								: "bg-white text-gray-800 border-gray-200 hover:bg-gray-50",
						)}
						aria-selected={selected === field.value}
					>
						<span className="text-sm">{field.label}</span>
					</Label>
				</Field>
			))}
		</RadioGroup>
	);
};
