import { SegmentedControl } from "@mantine/core";
import type { FC } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

export const TradeSwitch: FC = () => {
	const { tradingPair, setTradingPair, setLoading } = useTradingPairsStore();

	const pairs = ["bnbbtc", "btcusdt", "ethbtc", "ethusd", "ethusdt", "ltcbtc"];

	const handleChange = (value: string) => {
		setLoading(true);
		setTradingPair(value);
	};

	return (
		<SegmentedControl
			data={pairs.map((pair) => ({ label: pair.toUpperCase(), value: pair }))}
			onChange={handleChange}
			value={tradingPair}
		/>
	);
};
