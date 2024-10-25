import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";

interface ITrade {
	id: number;
	price: string;
	quantity: string;
	time: string;
	s: string;
}

export const useWebSocket = () => {
	const [trades, setTrades] = useState<ITrade[]>([]);
	const { tradingPair, setLoading } = useTradingPairsStore();
	const throttledData = useRef(
		throttle((trade: ITrade) => {
			setTrades((prev) => [trade, ...prev].slice(0, 50));
		}, 500),
	);

	useEffect(() => {
		setLoading(true);
		setTrades([]);

		const wsUri = `${process.env.REACT_APP_WEBSOCKET_URI}${tradingPair}@trade`;
		const ws = new WebSocket(wsUri);

		ws.onopen = () => {
			setLoading(false);
		};

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
	}, [tradingPair, setLoading]);

	return { trades, loading: useTradingPairsStore((state) => state.loading) };
};
