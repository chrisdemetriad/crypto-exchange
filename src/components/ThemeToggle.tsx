import type { FC } from "react";
import { useUserSettingsStore } from "../stores/useUserSettingsStore";

export const ThemeToggle: FC = () => {
	const theme = useUserSettingsStore((state) => state.theme);
	const toggleTheme = useUserSettingsStore((state) => state.toggleTheme);

	return (
		<button type="button" onClick={toggleTheme}>
			<p>Switch to {theme === "light" ? "Dark" : "Light"} Mode</p>
		</button>
	);
};
