import {
	Button,
	Flex,
	Text,
	Tooltip,
	useMantineColorScheme,
} from "@mantine/core";
import { useHotkeys, useOs } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import type { FC } from "react";

export const ThemeToggle: FC = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	const os = useOs();

	useHotkeys([["mod+Shift+I", toggleColorScheme]]);

	const shortcutKey = os === "macos" ? "⌘" : "Ctrl";
	const tooltipLabel = (
		<Flex align="center" gap="xs">
			<Text size="xs">Switch to {dark ? "light" : "dark"} mode</Text>
			<Text size="xs" style={{ opacity: 0.7 }}>
				({shortcutKey}+Shift+I)
			</Text>
		</Flex>
	);

	return (
		<Tooltip label={tooltipLabel} withArrow position="left">
			<Button onClick={toggleColorScheme} variant="outline" color="primary">
				{dark ? <IconSun size={14} /> : <IconMoon size={14} />}
			</Button>
		</Tooltip>
	);
};
