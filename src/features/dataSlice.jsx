import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return [...state, action.payload];
    },
    updateData: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.originId) {
          return {
            ...action.payload,
          };
        } else {
          return item;
        }
      });
    },
    deleteData: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addData, updateData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
