const actualCore = jest.requireActual("@mantine/core");

module.exports = {
	...actualCore,
	useMantineColorScheme: jest.fn(),
	Button: ({ children, onClick }) => (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	),
	Tooltip: ({ children }) => children,
	Flex: ({ children }) => <div>{children}</div>,
	Text: ({ children }) => <span>{children}</span>,
	Center: ({ children }) => <div>{children}</div>,
	Pill: ({ children }) => <span>{children}</span>,
	ScrollArea: ({ children }) => <div>{children}</div>,
	Table: {
		...actualCore.Table,
		Tr: ({ children }) => <tr>{children}</tr>,
		Td: ({ children }) => <td>{children}</td>,
		Th: ({ children }) => <th>{children}</th>,
		Thead: ({ children }) => <thead>{children}</thead>,
		Tbody: ({ children }) => <tbody>{children}</tbody>,
	},
};
