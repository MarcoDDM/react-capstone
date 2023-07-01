import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=ef30239155305281daba8ca03a91071b';

const initialState = {
  stocks: [],
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchStocks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        stocks: action.payload,
      }))
      .addCase(fetchStocks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export { fetchStocks };
export default stocksSlice.reducer;
