import type { FC } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

export const TradeSwitch: FC = () => {
	const setTradingPair = useTradingPairsStore((state) => state.setTradingPair);
	const tradingPair = useTradingPairsStore((state) => state.tradingPair);

	const pairs = ["bnbbtc", "btcusdt", "ethbtc", "ethusd", "ethusdt", "ltcbtc"];

	return (
		<select
			value={tradingPair}
			onChange={(e) => setTradingPair(e.target.value)}
		>
			{pairs.map((pair) => (
				<option key={pair} value={pair}>
					{pair}
				</option>
			))}
		</select>
	);
};
