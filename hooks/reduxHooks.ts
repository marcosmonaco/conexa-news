import {useDispatch, useSelector} from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "../context/store";

// Custom hook for dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook for accessing the state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
