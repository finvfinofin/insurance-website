import { MotionValue, motionValue } from "framer-motion";
import { create } from "zustand";

export interface ScrollStore {
  scrollYProgress: MotionValue<number>;
  setScrollYProgress: (value: MotionValue<number>) => void;
}

const useScrollStore = create<ScrollStore>((set) => ({
  scrollYProgress: motionValue(0),
  setScrollYProgress: (value) => set({ scrollYProgress: value }),
}));

export default useScrollStore;
