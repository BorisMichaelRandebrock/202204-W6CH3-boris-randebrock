import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    phoneNumber: [],
    calling: false,
  },
  reducers: {
    addDigit: (phone, action) => ({
      ...phone,
      phoneNumber: [...phone, action.payload],
    }),

    removeLastDigit: (phone, action) => ({
      ...phone,
      phoneNumber: [...phone.phoneNumber].slice(
        0,
        phone.phoneNumber.length - 1
      ),
    }),
  },
});

export const { addDigit: addDigitActionCreator } = phoneSlice.actions;

export default phoneSlice;
