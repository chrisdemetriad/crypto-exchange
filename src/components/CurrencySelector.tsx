import type { FC } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

export const CurrencySelector: FC = () => {
	const setTradingPair = useTradingPairsStore((state) => state.setTradingPair);
	const tradingPair = useTradingPairsStore((state) => state.tradingPair);

	const pairs = ["bnbbtc", "ethbtc", "ltcbtc"];

	return (
		<select
			value={tradingPair}
			onChange={(e) => setTradingPair(e.target.value)}
		>
			{pairs.map((pair) => (
				<option key={pair} value={pair}>
					{pair.toUpperCase()}
				</option>
			))}
		</select>
	);
};
