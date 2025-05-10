import { cn } from "@/lib/tailwind-css";
import { Checkbox as HeadlessCheckbox } from "@headlessui/react";
import { CheckCircle, Circle } from "lucide-react";

type TCheckboxProps = {
	checked: boolean;
	onChange?: (checked: boolean) => void;
	label: string;
	id?: string;
	className?: string;
	disabled?: boolean;
};

export const Checkbox = ({
	checked,
	onChange,
	label,
	id,
	className,
	disabled = false,
}: TCheckboxProps) => {
	return (
		<HeadlessCheckbox
			checked={checked}
			onChange={onChange}
			disabled={disabled}
			className={cn(
				"inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ease-in-out cursor-pointer transform hover:scale-105 active:scale-95",
				checked
					? "bg-black text-white border-black hover:bg-gray-800"
					: "bg-white text-gray-800 border-gray-200 hover:bg-gray-50",
				disabled && "opacity-50 cursor-not-allowed",
				className,
			)}
			id={id}
			aria-label={`${label}を選択`}
		>
			<div
				className="relative flex items-center justify-center w-4 h-4"
				aria-hidden="true"
			>
				<div
					className={cn(
						"absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out",
						checked ? "opacity-100" : "opacity-0",
					)}
				>
					<CheckCircle className="size-4 stroke-2 text-white" />
				</div>
				<div
					className={cn(
						"absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out",
						checked ? "opacity-0" : "opacity-100",
					)}
				>
					<Circle className="size-4 stroke-2 text-gray-600" />
				</div>
			</div>
			<span className="text-sm">{label}</span>
		</HeadlessCheckbox>
	);
};
