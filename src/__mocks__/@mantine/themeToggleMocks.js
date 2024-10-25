jest.mock("@mantine/core", () => ({
	...jest.requireActual("@mantine/core"),
	useMantineColorScheme: jest.fn(),
	Button: ({ children, onClick }) => (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	),
	Tooltip: ({ children }) => children,
	Flex: ({ children }) => <div>{children}</div>,
	Text: ({ children }) => <span>{children}</span>,
}));

jest.mock("@tabler/icons-react", () => ({
	IconSun: () => "IconSun",
	IconMoon: () => "IconMoon",
}));
