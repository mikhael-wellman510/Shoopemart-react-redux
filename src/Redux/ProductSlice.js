import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: {
    id: [1, 2, 3, 4, 5, 6, 7],
    images: [
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05093959/honda-brio.jpg",
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05093908/mercedes-benz-c-class.jpg",
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05093833/honda-crv.jpg",
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05093751/mini-cooper.jpg",
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05093714/jeep-wrangler.jpg",
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05094103/suzuki-ertiga.jpg",
      "https://blog-media.lifepal.co.id/app/uploads/sites/3/2022/01/05094204/daihatsu-xenia.jpg",
    ],
    name: ["Avanza", "Xenia", "Toyota", "Rush", "Rocky", "BMW", "Mercy"],
    harga: [
      "250.000.000",
      "145.000.000",
      "200.000.000",
      "340.000.000",
      "250.000.000",
      "210.000.000",
      "280.000.000",
    ],
    kota: [
      "Jakarta",
      "Bogor",
      "Samarinda",
      "Medan",
      "Batam",
      "Bandung",
      "Jogja",
    ],
    qty: 1,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addQty: (state) => {
      state.datas.qty += 1;
    },
    minQty: (state) => {
      if (state.datas.qty > 1) {
        state.datas.qty -= 1;
      }
    },
  },
});

export const { addQty, minQty } = productSlice.actions;
export default productSlice.reducer;
