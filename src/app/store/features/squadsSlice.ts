'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState: Squads = []

export const squadsSlice = createSlice({
  name: 'squads',
  initialState,
  reducers: {
    createSquad: (state, action) => {
      return [...state, action.payload];
    },
  }
})

export const { createSquad } = squadsSlice.actions;

export default squadsSlice.reducer;