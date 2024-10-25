import { Box, Text } from "@mantine/core";
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
			<Box
				style={{
					backgroundColor: "#ffffff",
					padding: "10px",
					border: "1px solid #ccc",
					borderRadius: 5,
				}}
			>
				<Text size="xs">Time: {label}</Text>
				<Text size="xs">Price: {payload[0].value.toFixed(2)} $</Text>
			</Box>
		);
	}

	return null;
};
