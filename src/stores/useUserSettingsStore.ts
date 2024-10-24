import { create } from "zustand";

interface IUserSettingsState {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export const useUserSettingsStore = create<IUserSettingsState>((set) => ({
	theme: "light",
	toggleTheme: () =>
		set((state) => ({
			theme: state.theme === "light" ? "dark" : "light",
		})),
}));
