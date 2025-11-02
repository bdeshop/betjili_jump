// hooks/useRedux.js
import { useDispatch, useSelector } from "react-redux";

// Hook for dispatch
export const useAppDispatch = () => useDispatch();

// Hook for selecting state
export const useAppSelector = (selector) => useSelector(selector);
