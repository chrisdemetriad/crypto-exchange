import { Title } from "@mantine/core";
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
			<Title order={1} c="primary">
				Binance Latest {tradingPair.toUpperCase()} Trades
			</Title>

			<ThemeToggle />
			<TradeSwitch />
			<SimpleLineChart />
			<SimpleBarChart />
			<TradeList />
		</div>
	);
};
