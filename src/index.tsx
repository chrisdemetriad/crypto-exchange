import React from "react";
import ReactDOM from "react-dom/client";
import { TradingApp } from "./TradingApp";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<TradingApp />
	</React.StrictMode>,
);
