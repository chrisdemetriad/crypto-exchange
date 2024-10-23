import type { FC } from "react";
import { TradeList } from "./components/TradeList";
import { TradeSwitch } from "./components/TradeSwitch";
import { useTradingPairsStore } from "./stores/useTradingPairsStore";

export const TradingApp: FC = () => {
	const { tradingPair } = useTradingPairsStore();

	return (
		<div>
			<header>
				<h1>Binance Latest {tradingPair.toUpperCase()} Trades</h1>
			</header>
			<TradeSwitch />
			<TradeList />
		</div>
	);
};
