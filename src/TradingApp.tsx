import type { FC } from "react";
import { CurrenciesList } from "./components/CurrenciesList";

import { useTradingPairsStore } from "./stores/useTradingPairsStore";

export const TradingApp: FC = () => {
	const { tradingPair } = useTradingPairsStore();

	return (
		<div>
			<header>
				<h1>Binance Latest {tradingPair.toUpperCase()} Trades</h1>
			</header>
			<CurrenciesList />
		</div>
	);
};
