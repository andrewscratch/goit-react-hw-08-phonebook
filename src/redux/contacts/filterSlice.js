import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;