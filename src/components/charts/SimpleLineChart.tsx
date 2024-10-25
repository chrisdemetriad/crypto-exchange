import { Badge, Box, Center, Text } from "@mantine/core";
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
import { CustomTooltip } from "./CustomTooltip";
import type { ITrade } from "./SimpleBarChart";

export const SimpleLineChart: FC = () => {
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
				Price over time
			</Badge>
			<ResponsiveContainer width="100%" height={220}>
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
					<Tooltip content={<CustomTooltip />} />
				</LineChart>
			</ResponsiveContainer>
		</Box>
	);
};
