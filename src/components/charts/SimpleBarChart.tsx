import { Badge, Box, Center, Text } from "@mantine/core";
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
import { CustomTooltip } from "./CustomTooltip";

export interface ITrade {
	id: number;
	price: string;
	quantity: string;
	time: string;
	s: string;
}

export const SimpleBarChart: FC = () => {
	const { trades, loading } = useWebSocket();

	const data = trades.map((trade: ITrade) => ({
		time: trade.time,
		price: Number.parseFloat(trade.price),
	}));

	if (loading) {
		return (
			<Center style={{ width: "100%", height: 250 }}>
				<Text size="xs">Loading chart data</Text>
			</Center>
		);
	}

	if (data.length === 0) {
		return (
			<Center style={{ width: "100%", height: 250 }}>
				<Text size="xs">No trading charts yet</Text>
			</Center>
		);
	}

	return (
		<Box>
			<Badge color="blue" variant="dot">
				Price distribution
			</Badge>
			<ResponsiveContainer width="100%" height={220}>
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
					<Tooltip content={<CustomTooltip />} />
				</BarChart>
			</ResponsiveContainer>
		</Box>
	);
};
