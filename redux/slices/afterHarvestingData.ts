import { Data } from "@/types/capitalgains.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Data = null;

const afterHarvestingDataSlice = createSlice({
  name: "afterHarvestingData",
  initialState,
  reducers: {
    setAfterHarvestingData: (state: Data, action) => {
      if (state) {
        state.stcg.profits = action.payload.stcg.profits;
        state.stcg.losses = action.payload.stcg.losses;
        state.ltcg.profits = action.payload.ltcg.profits;
        state.ltcg.losses = action.payload.ltcg.losses;
        state.stcgGain = action.payload.stcgGain;
        state.ltcgGain = action.payload.ltcgGain;
        state.gain = action.payload.gain;
      }
    },
  },
});

export const { setAfterHarvestingData } = afterHarvestingDataSlice.actions;

export default afterHarvestingDataSlice.reducer;
