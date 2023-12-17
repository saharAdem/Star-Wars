'use client';

import { configureStore } from '@reduxjs/toolkit';
import squadsReducer from './features/squadsSlice'

export const store = configureStore({
  reducer: {
    squads: squadsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;