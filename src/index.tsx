import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { TradingApp } from "./TradingApp";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

const theme = createTheme({
	fontFamily: "sans-serif",
	primaryColor: "orange",
});

root.render(
	<React.StrictMode>
		<MantineProvider theme={theme} defaultColorScheme="light">
			<TradingApp />
		</MantineProvider>
	</React.StrictMode>,
);
