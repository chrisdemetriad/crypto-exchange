import { MantineProvider } from "@mantine/core";
import { act, render, screen } from "@testing-library/react";
import "../../__mocks__/@mantine/componentMocks";
import "../../__mocks__/@mantine/resizeObserver";
import { useWebSocket } from "../../hooks/useWebsocket";
import { theme } from "../../theme";
import { SimpleLineChart } from "./SimpleLineChart";

describe("SimpleLineChart", () => {
	it("displays a loading state on page load", async () => {
		(useWebSocket as jest.Mock).mockReturnValue({ trades: [], loading: true });

		await act(async () => {
			render(
				<MantineProvider theme={theme}>
					<SimpleLineChart />
				</MantineProvider>,
			);
		});

		expect(screen.getByText("Loading chart data")).toBeInTheDocument();
	});

	it("displays a <No data message> when there are no trades", async () => {
		(useWebSocket as jest.Mock).mockReturnValue({ trades: [], loading: false });

		await act(async () => {
			render(
				<MantineProvider theme={theme}>
					<SimpleLineChart />
				</MantineProvider>,
			);
		});

		expect(screen.getByText("No trading charts yet")).toBeInTheDocument();
	});

	it("renders the line chart when trades are available", async () => {
		const mockTrades = [
			{ id: 1, price: "50000", time: "12:00:00" },
			{ id: 2, price: "51000", time: "12:01:00" },
		];
		(useWebSocket as jest.Mock).mockReturnValue({
			trades: mockTrades,
			loading: false,
		});

		await act(async () => {
			render(
				<MantineProvider theme={theme}>
					<SimpleLineChart />
				</MantineProvider>,
			);
		});

		expect(screen.getByText("Price over time")).toBeInTheDocument();
	});
});
