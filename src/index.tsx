import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { TradingApp } from "./TradingApp";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<MantineProvider theme={theme} defaultColorScheme="light">
			<TradingApp />
		</MantineProvider>
	</React.StrictMode>,
);
