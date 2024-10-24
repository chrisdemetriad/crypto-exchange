import { Button, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import type { FC } from "react";

export const ThemeToggle: FC = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<Button
			onClick={() => toggleColorScheme()}
			variant="outline"
			color={dark ? "yellow" : "blue"}
		>
			{dark ? <IconSun size={18} /> : <IconMoon size={18} />}
		</Button>
	);
};
