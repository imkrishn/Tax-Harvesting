import { Data } from "@/types/capitalgains.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Data = {
  stcg: {
    profits: 0,
    losses: 0,
  },
  ltcg: {
    profits: 0,
    losses: 0,
  },
  stcgGain: 0,
  ltcgGain: 0,
  gain: 0,
};

const afterHarvestingDataSlice = createSlice({
  name: "afterHarvestingData",
  initialState,
  reducers: {
    setAfterHarvestingData: (state, action) => {
      state.stcg.profits = action.payload.stcg.profits;
      state.stcg.losses = action.payload.stcg.losses;
      state.ltcg.profits = action.payload.ltcg.profits;
      state.ltcg.losses = action.payload.ltcg.losses;
      state.stcgGain = action.payload.stcgGain;
      state.ltcgGain = action.payload.ltcgGain;
      state.gain = action.payload.gain;
    },
  },
});

export const { setAfterHarvestingData } = afterHarvestingDataSlice.actions;

export default afterHarvestingDataSlice.reducer;
