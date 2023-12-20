'use client';

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { storeInSessionStorage } from '@/lib/helpers/sessionStorage/storeInSessionStorage';
import { getDataFromSessionStorage } from '@/lib/helpers/sessionStorage/getFromSessionStorage';

let initialState: Squads = []
if (typeof window !== undefined){
  initialState = getDataFromSessionStorage('squads') || []
}

export const squadsSlice = createSlice({
  name: 'squads',
  initialState,
  reducers: {
    createSquad: (state, action) => {
      const newSquad: Squad = {
        ...action.payload,
      };
      const data = sessionStorage.getItem('squads')
      const storedSquads: Squads = data? JSON.parse(data): []
      storeInSessionStorage('squads', [...storedSquads, { ...newSquad, id: uuidv4() }] );
      return [...state, newSquad];
    },
    editSquad: (state, action) =>{
      const updatedSquad = action.payload;

      const updatedSquads = state.map(squad =>
        squad.id === updatedSquad.id ? { ...updatedSquad } : squad
      );
      storeInSessionStorage('squads', updatedSquads);
      return updatedSquads;
    } 
  }
})

export const { createSquad, editSquad } = squadsSlice.actions;

export default squadsSlice.reducer;