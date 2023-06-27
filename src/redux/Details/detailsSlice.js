import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {},
  reducers: {
    setDetailsData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDetailsData } = detailsSlice.actions;

export default detailsSlice.reducer;
