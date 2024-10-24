import type { FC } from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { useWebSocket } from "../../hooks/useWebsocket";
import { CustomAxisTick } from "./CustomAxisTick";

interface ITrade {
	id: number;
	price: string;
	quantity: string;
	time: string;
}

export const SimpleLineChart: FC = () => {
	const trades = useWebSocket();

	const data = trades.map((trade: ITrade) => ({
		time: trade.time,
		price: Number.parseFloat(trade.price),
	}));

	return (
		<ResponsiveContainer width="100%" height={400}>
			<LineChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 10,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="time"
					height={60}
					tick={(props) => <CustomAxisTick {...props} />}
				/>
				<YAxis type="number" domain={["dataMin", "dataMax"]} />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="price" stroke="#8884d8" />
			</LineChart>
		</ResponsiveContainer>
	);
};
