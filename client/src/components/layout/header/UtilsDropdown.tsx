import React from "react";
import DropdownNavLink from "components/ui/DropdownNavLink";
import QuickDropdown from "components/ui/QuickDropdown";
import { SetState } from "types/react";

function UtilsLinks({ onClick }: { onClick: React.MouseEventHandler }) {
	return (
		<>
			<DropdownNavLink to="/utils/seeds" onClick={onClick}>
				Seeds Management
			</DropdownNavLink>
			<DropdownNavLink to="/utils/imports" onClick={onClick}>
				Import Management
			</DropdownNavLink>
			<DropdownNavLink to="/utils/quests" onClick={onClick}>
				Quest Creator
			</DropdownNavLink>
		</>
	);
}

export default function UtilsDropdown({
	className,
	menuClassName,
	style,
	setState,
}: {
	className?: string;
	menuClassName?: string;
	style?: React.CSSProperties;
	setState?: SetState<boolean>;
}) {
	const handleClick = () => {
		setState?.(false);
	};
	return (
		<QuickDropdown
			variant="clear"
			toggle="Developer Utils"
			className={`h-14 ${className}`}
			menuStyle={style}
			menuClassName={menuClassName}
			caret
		>
			<UtilsLinks onClick={handleClick} />
		</QuickDropdown>
	);
}
