import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITradingPairsState {
	tradingPair: string;
	loading: boolean;
	setTradingPair: (pair: string) => void;
	setLoading: (loading: boolean) => void;
}

export const useTradingPairsStore = create<ITradingPairsState>()(
	persist(
		(set) => ({
			tradingPair: "btcusdt",
			loading: false,
			setTradingPair: (pair) => set({ tradingPair: pair }),
			setLoading: (loading) => set({ loading }),
		}),
		{
			name: "trading-pair-storage",
		},
	),
);
