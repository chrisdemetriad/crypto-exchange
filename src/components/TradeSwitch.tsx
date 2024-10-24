import { SegmentedControl } from "@mantine/core";
import type { FC } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

export const TradeSwitch: FC = () => {
	const setTradingPair = useTradingPairsStore((state) => state.setTradingPair);
	const tradingPair = useTradingPairsStore((state) => state.tradingPair);

	const pairs = ["bnbbtc", "btcusdt", "ethbtc", "ethusd", "ethusdt", "ltcbtc"];

	return (
		<SegmentedControl
			data={pairs.map((pair) => ({ label: pair.toUpperCase(), value: pair }))}
			onChange={setTradingPair}
			value={tradingPair}
		/>
	);
};
