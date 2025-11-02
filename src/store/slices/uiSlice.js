import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  sidebarOpen: true,
  loading: false,
  modalOpen: false,
  alertMessage: "",
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
    setAlertMessage(state, action) {
      state.alertMessage = action.payload;
    },
  },
});
export const {
  toggleDarkMode,
  toggleSidebar,
  setLoading,
  openModal,
  closeModal,
  setAlertMessage,
} = uiSlice.actions;
export default uiSlice.reducer;
