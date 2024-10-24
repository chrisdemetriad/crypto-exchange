import { Container, Grid } from "@mantine/core";
import type { FC } from "react";
import { TradeList } from "./components/TradeList";
import { SimpleBarChart } from "./components/charts/SimpleBarChart";
import { SimpleLineChart } from "./components/charts/SimpleLineChart";

import { Header } from "./components/Header";

export const TradingApp: FC = () => {
	return (
		<Container fluid>
			<Grid grow>
				<Grid.Col span={12} style={{ marginTop: 20 }}>
					<Header />
				</Grid.Col>
				<Grid.Col span={12}>
					<TradeList />
				</Grid.Col>
				<Grid.Col span={6}>
					<SimpleLineChart />
				</Grid.Col>
				<Grid.Col span={6}>
					<SimpleBarChart />
				</Grid.Col>
			</Grid>
		</Container>
	);
};
