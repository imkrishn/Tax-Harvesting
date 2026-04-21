import { Data } from "@/types/capitalgains.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Data = null;

const afterHarvestingDataSlice = createSlice({
  name: "afterHarvestingData",
  initialState,
  reducers: {
    setAfterHarvestingData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAfterHarvestingData } = afterHarvestingDataSlice.actions;

export default afterHarvestingDataSlice.reducer;
