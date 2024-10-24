import type { FC } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { useWebSocket } from "../../hooks/useWebsocket";
import { CustomAxisTick } from "./CustomAxisTick";

interface Trade {
	id: number;
	price: string;
	quantity: string;
	time: string;
}

export const SimpleBarChart: FC = () => {
	const trades = useWebSocket();

	const data = trades.map((trade: Trade) => ({
		time: trade.time,
		price: Number.parseFloat(trade.price),
	}));

	return (
		<ResponsiveContainer width="100%" height={400}>
			<BarChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 10,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="time" tick={(props) => <CustomAxisTick {...props} />} />
				<YAxis type="number" domain={["dataMin", "dataMax"]} />
				<Tooltip />
				<Legend />
				<Bar dataKey="price" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	);
};
