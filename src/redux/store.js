import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './Stocks/stocksSlice';

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});

export default store;
