import type { FC } from "react";
import { useWebSocket } from "../hooks/useWebsocket";

export const TradeList: FC = () => {
	const trades = useWebSocket();

	return (
		<div>
			<ul>
				{trades.map((trade) => (
					<li key={trade.id}>
						Id: {trade.id}, Price: {trade.price}, Qty: {trade.quantity}, Time:{" "}
						{trade.time}
					</li>
				))}
			</ul>
		</div>
	);
};
