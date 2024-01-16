import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
};

export const addKeranjang = createSlice({
  name: "addKeranjang",
  initialState,
  reducers: {
    addData: (state, action) => {
      //   state.datas.push(action.payload);
      // Dapatin ada d index brp
      //   const data = state.datas.indexOf(action.payload);
      const find = state.datas.findIndex(
        (item) => item.id === action.payload.id
      );

      if (find == -1) {
        state.datas.push(action.payload);
      } else {
        state.datas[find].qty += action.payload.qty;
      }
    },
    deleteData: (state, action) => {
      console.log("hasil", action.payload);
      state.datas = state.datas.filter((datas) => datas.id !== action.payload);
    },
  },
});

export const { addData, deleteData } = addKeranjang.actions;
export default addKeranjang.reducer;
