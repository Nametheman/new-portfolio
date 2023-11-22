"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface pageState {
  page: string;
}

const initialState: pageState = {
  page: "landing",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const pageSliceActions = pageSlice.actions;

export default pageSlice.reducer;
