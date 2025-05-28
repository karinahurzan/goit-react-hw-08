import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,     
  isMobile: false,   
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
    closeMenu(state) {
      state.isOpen = false;
    },
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setIsMobile } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
