'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState: SpeciesCharacters = {}

export const speciesCharacterSlice = createSlice({
  name: 'speciesCharacter',
  initialState,
  reducers: {
    addspeciesCharacter: (state, action) => {
      return {...state, ...action.payload};
    },
  }
})

export const { addspeciesCharacter } = speciesCharacterSlice.actions;

export default speciesCharacterSlice.reducer;