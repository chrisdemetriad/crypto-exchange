import { Center, Pill, ScrollArea, Table, Text } from "@mantine/core";
import cx from "clsx";
import { type FC, useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWebsocket";
import classes from "./TradeList.module.css";

export const TradeList: FC = () => {
	const trades = useWebSocket();
	const [scrolled, setScrolled] = useState(false);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setKey((prev) => prev + 1);
	}, []);

	const rows = trades.map((trade, index) => (
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
	));

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
				<Table.Thead
					className={cx(classes.header, { [classes.scrolled]: scrolled })}
				>
					<Table.Tr>
						<Table.Th>Trading pair</Table.Th>
						<Table.Th>ID</Table.Th>
						<Table.Th>Price</Table.Th>
						<Table.Th>Quantity</Table.Th>
						<Table.Th>Time</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</ScrollArea>
	);
};
