import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { HomeTopInterface } from "../../interfaces/home";

interface HomeTopState extends HomeTopInterface {
  errors?: string;
}

const initialState: HomeTopState = {
  contentTitle: "Building exactly the eCommerce website you want.",
  contentSpan:
    "WooCommerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way.",
  buttonStartContent: "Start a New Store",
  aHrefcontent: "or  Customize & Extend ›",
  additionalContent: undefined,
};

const homeTopSlice = createSlice({
  name: "homeTop",
  initialState,
  reducers: {
    setHomeTop: (state, { payload }: PayloadAction<HomeTopState>) => {
      state.contentTitle = payload.contentTitle;
      state.contentSpan = payload.contentSpan;
      state.buttonStartContent = payload.buttonStartContent;
      state.aHrefcontent = payload.aHrefcontent;
      state.errors=undefined;
      state.additionalContent = payload.additionalContent && [...payload.additionalContent]
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },
    resetHomeTopContent: (state)=>{
      state.contentTitle= "Building exactly the eCommerce website you want."
      state.contentSpan=
        "WooCommerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way."
      state.buttonStartContent= "Start a New Store"
      state.aHrefcontent= "or  Customize & Extend ›"
      state.additionalContent= undefined
    }
  },
});

export const { setErrors, setHomeTop, resetHomeTopContent } = homeTopSlice.actions
export default homeTopSlice.reducer
export const selectHomeTop = (state: RootState) => state.homeTop;