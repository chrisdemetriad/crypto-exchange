import { useEffect, useState } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

interface ITrade {
	id: number;
	price: string;
	quantity: string;
	time: string;
	s: string;
}

import { throttle } from "lodash";
import { useRef } from "react";

export const useWebSocket = () => {
	const [trades, setTrades] = useState<ITrade[]>([]);
	const tradingPair = useTradingPairsStore((state) => state.tradingPair);
	const throttledData = useRef(
		throttle((trade: ITrade) => {
			setTrades((prev) => [trade, ...prev].slice(0, 50));
		}, 500),
	);

	useEffect(() => {
		const ws = new WebSocket(
			`wss://stream.binance.com:9443/ws/${tradingPair}@trade`,
		);

		ws.onmessage = (event) => {
			const data = JSON.parse(event.data);
			const trade: ITrade = {
				id: data.t,
				price: data.p,
				quantity: data.q,
				time: new Date(data.T).toLocaleTimeString(),
				s: data.s,
			};
			throttledData.current(trade);
		};

		return () => {
			ws.close();
			throttledData.current.cancel();
		};
	}, [tradingPair]);

	return trades;
};
