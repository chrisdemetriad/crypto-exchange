import { useEffect, useState } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

interface Trade {
	id: number;
	price: string;
	quantity: string;
	time: string;
}

export const useWebSocket = () => {
	const [trades, setTrades] = useState<Trade[]>([]);
	const tradingPair = useTradingPairsStore((state) => state.tradingPair);

	useEffect(() => {
		const ws = new WebSocket(
			`wss://stream.binance.com:9443/ws/${tradingPair}@trade`,
		);

		ws.onmessage = (event) => {
			const data = JSON.parse(event.data);
			const trade: Trade = {
				id: data.t,
				price: data.p,
				quantity: data.q,
				time: new Date(data.T).toLocaleTimeString(),
			};
			setTrades((prev) => [trade, ...prev].slice(0, 20));
		};

		return () => ws.close();
	}, [tradingPair]);

	return trades;
};
