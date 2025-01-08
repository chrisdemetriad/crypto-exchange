![Kapture 2024-10-25 at 12 53 29](https://github.com/user-attachments/assets/bcaf6dc6-487f-470b-8329-b14bae1a4ba6)

## **Crypto Trading Dashboard**

A real-time cryptocurrency trading dashboard that fetches and visualises trading data from Binance. The app shows live trade updates, interactive charts and supports switching between different trading pairs.

### **Overview**

This application connects to Binance's WebSocket API to stream live trade data for selected cryptocurrency pairs. Users can monitor price trends in real-time through dynamic line and bar charts and toggle between light and dark themes for a customisable experience.

### **Features**

- **Real-Time Trade Updates:** Live updates for selected trading pairs.
- **Interactive Charts:** Line and bar charts for data visualisation.
- **Trading Pair Switcher:** Easily switch between multiple pairs (e.g. BTC/USDT, ETH/BTC).
- **Light/Dark Mode:** Toggle theme based on user preference.
- **Optimised Performance:** Data throttling for smooth rendering.

### **Tech Stack**

- **Frontend:** React, Mantine UI
- **State Management:** Zustand
- **Data Visualisation:** Recharts
- **WebSocket Integration:** Binance API

### **Installation**

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm start
```

Ensure you have the following environment variable set in your `.env` file:

```env
REACT_APP_WEBSOCKET_URI=wss://stream.binance.com:9443/ws/
```

### **Usage**

1. Start the development server: `npm start`
2. Select your preferred trading pair.
3. Monitor live trades and visualise data on charts.
4. Switch themes using the toggle button.

### Data structure

Expected data format:

```
{
  "e": "trade",       // Event type
  "E": 1672515782136, // Event time
  "s": "BNBBTC",      // Symbol
  "t": 12345,         // Trade ID
  "p": "0.001",       // Price
  "q": "100",         // Quantity
  "T": 1672515782136, // Trade time
  "m": true,          // Is the buyer the market maker?
  "M": true           // Ignore
}
```

### Useful links:

[Binance API](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams)

### **Contributing**

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

### **License**

This project is licensed under the **MIT License** – you are free to use, modify, and distribute this software with proper attribution.

### **Feedback**

If you encounter any issues or have any suggestions, feel free to open an issue or reach out via email.
