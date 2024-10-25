import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITradingPairsState {
	tradingPair: string;
	setTradingPair: (pair: string) => void;
}

export const useTradingPairsStore = create<ITradingPairsState>()(
	persist(
		(set) => ({
			tradingPair: "btcusdt",
			setTradingPair: (pair) => set({ tradingPair: pair }),
		}),
		{
			name: "trading-pair-storage",
		},
	),
);
