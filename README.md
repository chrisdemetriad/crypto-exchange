## React Trading App

Thank you for taking the time to check my solution.

## Features

- Basic React app with TypeScript (cra), Zustand for state management
- Trading pair selector
- Price trend visualisation chart
- Throttler
- Unit tests
- Theme switcher

## Considerations

I am thinking of using a custom hook for the WebSocket connection to emphasise on the logic encapsulation and cleanliness plus it would be easier to test the unit in isolation. There are numerous benefits, such as maintainability, scalability, etc.

I would like to add a dark/light theme switcher to showcase the fact that I am using two separate stores, one for the theme settings and one for the trading pair, and I would like to avoid props drilling for performance reasons.

I would be writing a trading pair selector so that the user could easily switch to different currencies.

Might have to consider throttling or debouncing the updates to avoid excessive re-renders.

I would be using MUI as a design framework with some CSS thrown in and would probably leverage the sx prop they provide - if needed - as a one-off and use their ThemeProvider if I need more consistent styles. For consistency (and scalability) reasons, we can't rely on `sx` - at scale.

I would then need to find a chart library such a Recharts or Charts.js to show the price trends, I am not sure what I will go with at this point.

## File structure

```
App.tsx
index.tsx

src/
components/
  ─ CurrenciesList.tsx
  ─ CurrencySelector.tsx
  ─ Chart.tsx
  ─ ThemeSwitcher.tsx
hooks/
─ useWebSocket.ts
stores/
  - useUserSettingsStore.ts
  - useTradingPairsStore.ts

styles/ or a theme folder to keep the global styles, provider, etc - useStore.ts
```
