import { create } from "zustand";
import createStartSlice from "./createStartSlice";
import createConfigSlice from "./createConfigSlice";

const useStore = create((set, get) => ({
  ...createStartSlice(set, get),
  ...createConfigSlice(set, get),
  // Add more slices here
}));

export { useStore };
