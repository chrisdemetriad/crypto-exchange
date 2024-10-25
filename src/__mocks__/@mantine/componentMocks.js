jest.mock("./../../components/TableHeader.tsx", () => ({
	TableHeader: () => (
		<thead>
			<tr>
				<th>Header</th>
			</tr>
		</thead>
	),
}));

jest.mock("./../../components/TableSkeletonRow.tsx", () => ({
	TableSkeletonRow: () => (
		<tr>
			<td>Row (Skeleton)</td>
		</tr>
	),
}));

jest.mock("./../../hooks/useWebsocket.ts", () => ({
	useWebSocket: jest.fn(),
}));
