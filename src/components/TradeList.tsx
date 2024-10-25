import { Center, Pill, ScrollArea, Skeleton, Table, Text } from "@mantine/core";
import cx from "clsx";
import { type FC, useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWebsocket";
import classes from "./TradeList.module.css";

const TABLE_HEADERS = ["Trading pair", "ID", "Price", "Quantity", "Time"];

const TableHeader: FC<{ scrolled?: boolean }> = ({ scrolled }) => (
	<Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
		<Table.Tr>
			{TABLE_HEADERS.map((header) => (
				<Table.Th key={header}>{header}</Table.Th>
			))}
		</Table.Tr>
	</Table.Thead>
);

const SkeletonRow: FC = () => (
	<Table.Tr>
		<Table.Td>
			<Skeleton height={20} width={60} radius="xl" />
		</Table.Td>
		<Table.Td>
			<Skeleton height={20} width={50} />
		</Table.Td>
		<Table.Td>
			<Skeleton height={20} width={80} />
		</Table.Td>
		<Table.Td>
			<Skeleton height={20} width={80} />
		</Table.Td>
		<Table.Td>
			<Skeleton height={20} width={100} />
		</Table.Td>
	</Table.Tr>
);

export const TradeList: FC = () => {
	const { trades, loading } = useWebSocket();
	const [scrolled, setScrolled] = useState(false);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setKey((prev) => prev + 1);
	}, []);

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
						{Array(10)
							.fill(null)
							.map((_, noIndexInProd) => (
								<SkeletonRow key={`skeleton-row-${noIndexInProd}`} />
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
