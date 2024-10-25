import { MantineProvider } from "@mantine/core";
import { act, render, screen } from "@testing-library/react";
import "../__mocks__/@mantine/componentMocks";
import { useWebSocket } from "../hooks/useWebsocket";
import { theme } from "../theme";
import { TradeList } from "./TradeList";

jest.mock("@mantine/hooks");

describe("TradeList", () => {
	it("renders 10 Skeleton rows", async () => {
		(useWebSocket as jest.Mock).mockReturnValue({
			trades: [],
			loading: true,
		});

		await act(async () => {
			render(
				<MantineProvider theme={theme}>
					<TradeList />
				</MantineProvider>,
			);
		});

		const skeletonRows = screen.getAllByText("Row (Skeleton)");
		expect(skeletonRows).toHaveLength(10);
	});

	it("renders a <No data message> when there aren't any trades", async () => {
		(useWebSocket as jest.Mock).mockReturnValue({
			trades: [],
			loading: false,
		});

		await act(async () => {
			render(
				<MantineProvider theme={theme}>
					<TradeList />
				</MantineProvider>,
			);
		});

		expect(screen.getByText("No trading data yet")).toBeInTheDocument();
	});

	it("renders trades list when data is available", async () => {
		const mockTrades = [
			{ id: 1, s: "BTCUSD", price: "25", quantity: "250", time: "12:00:00" },
			{ id: 2, s: "LTCBTC", price: "50", quantity: "500", time: "14:00:00" },
		];

		(useWebSocket as jest.Mock).mockReturnValue({
			trades: mockTrades,
			loading: false,
		});

		await act(async () => {
			render(
				<MantineProvider theme={theme}>
					<TradeList />
				</MantineProvider>,
			);
		});

		expect(screen.getByText("BTCUSD")).toBeInTheDocument();
		expect(screen.getByText("LTCBTC")).toBeInTheDocument();

		expect(screen.getByText("25")).toBeInTheDocument();
		expect(screen.getByText("50")).toBeInTheDocument();

		expect(screen.getByText("250")).toBeInTheDocument();
		expect(screen.getByText("500")).toBeInTheDocument();

		expect(screen.getByText("12:00:00")).toBeInTheDocument();
		expect(screen.getByText("14:00:00")).toBeInTheDocument();
	});
});
