import { createTheme, rem, virtualColor } from "@mantine/core";

export const theme = createTheme({
	fontFamily: "sans-serif",
	headings: {
		fontFamily: "Roboto",
		sizes: {
			h1: {
				fontWeight: "700",
				fontSize: rem(24),
				lineHeight: "1.4",
			},
		},
	},
	colors: {
		primary: virtualColor({
			name: "primary",
			dark: "pink",
			light: "blue",
		}),
	},
});
