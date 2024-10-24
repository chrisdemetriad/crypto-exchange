import type { FC } from "react";

interface CustomAxisTickProps {
	x: number;
	y: number;
	payload: { value: string };
}

export const CustomAxisTick: FC<CustomAxisTickProps> = ({ x, y, payload }) => {
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="end"
				fill="#666"
				transform="rotate(-35)"
			>
				{payload.value}
			</text>
		</g>
	);
};
