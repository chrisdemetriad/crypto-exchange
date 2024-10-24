import { Button, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import type { FC } from "react";

export const ThemeToggle: FC = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	return (
		<Tooltip
			label={`Switch to ${dark ? "light" : "dark"} mode`}
			withArrow
			position="left"
		>
			<Button
				onClick={() => toggleColorScheme()}
				variant="outline"
				color="primary"
			>
				{dark ? <IconSun size={14} /> : <IconMoon size={14} />}
			</Button>
		</Tooltip>
	);
};
