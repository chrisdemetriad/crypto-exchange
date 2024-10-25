import "../__mocks__/@mantine/themeToggleMocks";

import { useMantineColorScheme } from "@mantine/core";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
	it("renders a light mode button when in dark mode", () => {
		(useMantineColorScheme as jest.Mock).mockReturnValue({
			colorScheme: "dark",
			toggleColorScheme: jest.fn(),
		});

		render(<ThemeToggle />);
		expect(screen.getByRole("button")).toHaveTextContent("IconSun");
	});

	it("renders a light mode button when in light mode", () => {
		(useMantineColorScheme as jest.Mock).mockReturnValue({
			colorScheme: "light",
			toggleColorScheme: jest.fn(),
		});

		render(<ThemeToggle />);
		expect(screen.getByRole("button")).toHaveTextContent("IconMoon");
	});

	it("calls toggleColorScheme when mode button is clicked", () => {
		const toggleColorScheme = jest.fn();
		(useMantineColorScheme as jest.Mock).mockReturnValue({
			colorScheme: "light",
			toggleColorScheme,
		});

		render(<ThemeToggle />);
		fireEvent.click(screen.getByRole("button"));
		expect(toggleColorScheme).toHaveBeenCalled();
	});
});
