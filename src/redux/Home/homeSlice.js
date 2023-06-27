import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
});


export default homeSlice.reducer;
