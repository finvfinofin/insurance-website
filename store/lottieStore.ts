import { create } from "zustand";

const initialValue = {
  jAnimation: "",
  bannerTopHome: "",
  lightRays: "",
  jaiText: "",
  saveOnGoal: "",
  investUp: "",
  investArrow: "",
  loanIt: "",
  referEarn: "",
  sardarJi: "",
  arrowBtn: "",
};

export interface LottieStore {
  lottieFiles: typeof initialValue;
  setLottieFiles: (value: typeof initialValue) => void;
}

const useLottieStore = create<LottieStore>((set) => ({
  lottieFiles: initialValue,
  setLottieFiles: (value) => set({ lottieFiles: value }),
}));

export default useLottieStore;
