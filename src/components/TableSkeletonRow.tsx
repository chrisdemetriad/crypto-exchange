import { Skeleton, Table } from "@mantine/core";
import type { FC } from "react";

export const TableSkeletonRow: FC = () => (
	<Table.Tr>
		<Table.Td>
			<Skeleton height={20} width={60} />
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
