import { create } from "zustand";

interface TradingPairsState {
	tradingPair: string;
	setTradingPair: (pair: string) => void;
}

export const useTradingPairsStore = create<TradingPairsState>((set) => ({
	tradingPair: "bnbbtc",
	setTradingPair: (pair) => set({ tradingPair: pair }),
}));
