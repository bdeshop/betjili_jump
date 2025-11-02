// hooks/useUI.js
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDarkMode,
  toggleSidebar,
  setLoading,
  openModal,
  closeModal,
  setAlertMessage,
} from "../store/slices/uiSlice";

export function useUI() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  return {
    ...ui,
    toggleDarkMode: () => dispatch(toggleDarkMode()),
    toggleSidebar: () => dispatch(toggleSidebar()),
    setLoading: (value) => dispatch(setLoading(value)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    setAlertMessage: (msg) => dispatch(setAlertMessage(msg)),
  };
}
