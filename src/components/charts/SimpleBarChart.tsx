import { Center, Text } from "@mantine/core";
import type { FC } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { useWebSocket } from "../../hooks/useWebsocket";
import { CustomAxisTick } from "./CustomAxisTick";

export interface ITrade {
	id: number;
	price: string;
	quantity: string;
	time: string;
	s: string;
}

export const SimpleBarChart: FC = () => {
	const trades = useWebSocket();

	const data = trades.map((trade: ITrade) => ({
		time: trade.time,
		price: Number.parseFloat(trade.price),
	}));

	return (
		<ResponsiveContainer width="100%" height={250}>
			{data.length === 0 ? (
				<Center style={{ width: "100%", height: "100%" }}>
					<Text size="xs">No trading charts yet</Text>
				</Center>
			) : (
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						height={60}
						stroke="#aaaaaa"
						dataKey="time"
						tick={(props) => <CustomAxisTick {...props} />}
					/>
					<YAxis
						fontSize={12}
						stroke="#aaaaaa"
						type="number"
						domain={["dataMin", "dataMax"]}
					/>
					<Bar dataKey="price" fill="#8884d8" />
					<Tooltip />
				</BarChart>
			)}
		</ResponsiveContainer>
	);
};
