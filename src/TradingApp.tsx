import type { FC } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { TradeList } from "./components/TradeList";
import { TradeSwitch } from "./components/TradeSwitch";
import { SimpleBarChart } from "./components/charts/SimpleBarChart";
import { SimpleLineChart } from "./components/charts/SimpleLineChart";
import { useTradingPairsStore } from "./stores/useTradingPairsStore";

export const TradingApp: FC = () => {
	const { tradingPair } = useTradingPairsStore();

	return (
		<div>
			<h1>Binance Latest {tradingPair.toUpperCase()} Trades</h1>
			<ThemeToggle />
			<TradeSwitch />
			<SimpleLineChart />
			<SimpleBarChart />
			<TradeList />
		</div>
	);
};
