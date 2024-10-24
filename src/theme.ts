import { createTheme, rem, virtualColor } from "@mantine/core";

export const theme = createTheme({
	fontFamily: "sans-serif",
	headings: {
		fontFamily: "San Francisco",
		sizes: {
			h1: {
				fontWeight: "100",
				fontSize: rem(24),
				lineHeight: "1.4",
			},
		},
	},
	colors: {
		primary: virtualColor({
			name: "primary",
			dark: "blue",
			light: "blue",
		}),
	},
	components: {
		Table: {
			styles: {
				th: {
					fontWeight: 400,
				},
				td: {
					fontSize: "0.75rem",
				},
			},
		},
	},
});
