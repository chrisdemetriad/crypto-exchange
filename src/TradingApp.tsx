import { type FC, useEffect, useState } from "react";

interface TradeData {
	id: number;
	price: string;
	quantity: string;
	time: string;
}

const TradingApp: FC = (): JSX.Element => {
	const [tradeList, setTradeList] = useState<TradeData[]>([]);

	useEffect(() => {
		const socket = new WebSocket(
			"wss://stream.binance.com:9443/ws/bnbbtc@trade",
		);

		socket.onmessage = (event) => {
			const tradeEvent = JSON.parse(event.data);

			const incomingTrade: TradeData = {
				id: tradeEvent.t,
				price: tradeEvent.p,
				quantity: tradeEvent.q,
				time: new Date(tradeEvent.T).toLocaleTimeString(),
			};

			setTradeList((prevTrades) => [incomingTrade, ...prevTrades]);
		};

		return () => socket.close();
	}, []);

	return (
		<div>
			<h1>BNB/BTC Trades</h1>
			<ul>
				{tradeList.map((trade) => (
					<li key={trade.id}>
						Id: {trade.id}, Price: {trade.price}, Qty: {trade.quantity}, Time:{" "}
						{trade.time}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TradingApp;
