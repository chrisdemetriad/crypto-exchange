import { Container, Grid, Loader } from "@mantine/core";
import type { FC } from "react";
import { Suspense, lazy } from "react";
import { Header } from "./components/Header";

const TradeList = lazy(() =>
	import("./components/TradeList").then((module) => ({
		default: module.TradeList,
	})),
);
const SimpleBarChart = lazy(() =>
	import("./components/charts/SimpleBarChart").then((module) => ({
		default: module.SimpleBarChart,
	})),
);
const SimpleLineChart = lazy(() =>
	import("./components/charts/SimpleLineChart").then((module) => ({
		default: module.SimpleLineChart,
	})),
);

export const TradingApp: FC = () => {
	return (
		<Container fluid>
			<Grid grow>
				<Grid.Col span={12} style={{ marginTop: 20 }}>
					<Header />
				</Grid.Col>
				<Grid.Col span={12}>
					<Suspense fallback={<Loader />}>
						<TradeList />
					</Suspense>
				</Grid.Col>
				<Grid.Col span={6}>
					<Suspense fallback={<Loader />}>
						<SimpleLineChart />
					</Suspense>
				</Grid.Col>
				<Grid.Col span={6}>
					<Suspense fallback={<Loader />}>
						<SimpleBarChart />
					</Suspense>
				</Grid.Col>
			</Grid>
		</Container>
	);
};
