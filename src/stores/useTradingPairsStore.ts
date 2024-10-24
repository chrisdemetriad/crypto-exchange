import { create } from "zustand";

interface ITradingPairsState {
	tradingPair: string;
	setTradingPair: (pair: string) => void;
}

export const useTradingPairsStore = create<ITradingPairsState>((set) => ({
	tradingPair: "bnbbtc",
	setTradingPair: (pair) => set({ tradingPair: pair }),
}));
