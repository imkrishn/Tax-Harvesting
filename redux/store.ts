import { configureStore } from "@reduxjs/toolkit";
import afterHarvestingDataSlice from "./slices/afterHarvestingData";

export const store = configureStore({
  reducer: {
    afterHarvestingData: afterHarvestingDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
