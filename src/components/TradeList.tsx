import { Center, Pill, ScrollArea, Table, Text } from "@mantine/core";
import cx from "clsx";
import { useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWebsocket";
import { TableHeader } from "./TableHeader";
import { TableSkeletonRow } from "./TableSkeletonRow";
import classes from "./TradeList.module.css";

export const TradeList: React.FC = () => {
	const { trades, loading } = useWebSocket();
	const [scrolled, setScrolled] = useState(false);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setKey((prev) => prev + 1);
	}, []);

	const skeletonRows = Array(10)
		.fill(null)
		.map((_, index) => ({ id: `skeleton-${index}` }));

	if (loading) {
		return (
			<ScrollArea h={300}>
				<Table
					miw={700}
					withTableBorder
					withColumnBorders
					striped
					highlightOnHover
					horizontalSpacing="5"
					verticalSpacing="10"
				>
					<TableHeader />
					<Table.Tbody>
						{skeletonRows.map((row) => (
							<TableSkeletonRow key={row.id} />
						))}
					</Table.Tbody>
				</Table>
			</ScrollArea>
		);
	}

	if (trades.length === 0) {
		return (
			<Center style={{ height: 300 }}>
				<Text size="xs">No trading data yet</Text>
			</Center>
		);
	}

	return (
		<ScrollArea
			h={300}
			onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
		>
			<Table
				miw={700}
				withTableBorder
				withColumnBorders
				striped
				highlightOnHover
				horizontalSpacing="5"
				verticalSpacing="10"
			>
				<TableHeader scrolled={scrolled} />
				<Table.Tbody>
					{trades.map((trade, index) => (
						<Table.Tr
							key={`${key}-${trade.id}`}
							className={cx({ [classes.highlightRow]: index === 0 })}
						>
							<Table.Td>
								<Pill size="xs">{trade.s}</Pill>
							</Table.Td>
							<Table.Td>{trade.id}</Table.Td>
							<Table.Td>{trade.price}</Table.Td>
							<Table.Td>{trade.quantity}</Table.Td>
							<Table.Td>{trade.time}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</ScrollArea>
	);
};
