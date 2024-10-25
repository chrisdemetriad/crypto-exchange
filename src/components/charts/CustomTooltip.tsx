import { Paper, Text } from "@mantine/core";
import type { FC } from "react";

interface ICustomTooltipProps {
	active?: boolean;
	payload?: {
		value: number;
		dataKey: string;
	}[];
	label?: string;
}

export const CustomTooltip: FC<ICustomTooltipProps> = ({
	active,
	payload,
	label,
}) => {
	if (active && payload && payload.length) {
		return (
			<Paper
				style={{
					padding: "10px",
					border: "1px solid #ccc",
					borderRadius: 5,
				}}
			>
				<Text size="xs">Time: {label}</Text>
				<Text size="xs">Price: {payload[0].value.toFixed(2)} $</Text>
			</Paper>
		);
	}

	return null;
};
