import type { FC } from "react";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { useWebSocket } from "../../hooks/useWebsocket";
import { CustomAxisTick } from "./CustomAxisTick";
import type { ITrade } from "./SimpleBarChart";

export const SimpleLineChart: FC = () => {
	const trades = useWebSocket();

	const data = trades.map((trade: ITrade) => ({
		time: trade.time,
		price: Number.parseFloat(trade.price),
	}));

	return (
		<ResponsiveContainer width="100%" height={250}>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="time"
					stroke="#aaaaaa"
					height={60}
					tick={(props) => <CustomAxisTick {...props} />}
				/>
				<YAxis
					fontSize={12}
					stroke="#aaaaaa"
					type="number"
					domain={["dataMin", "dataMax"]}
				/>
				<Line type="monotone" dataKey="price" stroke="#8884d8" />
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
};
