'use client';

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: Squads = []

export const squadsSlice = createSlice({
  name: 'squads',
  initialState,
  reducers: {
    createSquad: (state, action) => {
      const newSquad = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newSquad];
    },
  }
})

export const { createSquad } = squadsSlice.actions;

export default squadsSlice.reducer;