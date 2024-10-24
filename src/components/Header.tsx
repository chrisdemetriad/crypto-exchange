import { Flex, Group, Title } from "@mantine/core";
import { useTradingPairsStore } from "../stores/useTradingPairsStore";
import { ThemeToggle } from "./ThemeToggle";
import { TradeSwitch } from "./TradeSwitch";

export const Header = () => {
	const { tradingPair } = useTradingPairsStore();

	return (
		<Flex justify="space-between" align="center" mih={50}>
			<Title order={1} c="primary">
				LATEST {tradingPair.toUpperCase()} TRADES
			</Title>
			<Group>
				<TradeSwitch />
				<ThemeToggle />
			</Group>
		</Flex>
	);
};
