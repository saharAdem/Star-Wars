'use client';

import { configureStore } from '@reduxjs/toolkit';
import squadsReducer from './features/squadsSlice'
import speciesCharacterReducer from './features/speciesCharactersSlice';

export const store = configureStore({
  reducer: {
    squads: squadsReducer,
    speciesCharacter: speciesCharacterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;