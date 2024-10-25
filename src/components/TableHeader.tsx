import { Table } from "@mantine/core";
import cx from "clsx";
import type { FC } from "react";
import classes from "./TradeList.module.css";

const tableHeaders = ["Trading pair", "ID", "Price", "Quantity", "Time"];

export const TableHeader: FC<{ scrolled?: boolean }> = ({ scrolled }) => (
	<Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
		<Table.Tr>
			{tableHeaders.map((header) => (
				<Table.Th key={header}>{header}</Table.Th>
			))}
		</Table.Tr>
	</Table.Thead>
);
