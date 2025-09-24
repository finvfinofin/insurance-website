import { create } from "zustand";

interface FooterState {
  data: any | null;
  setFooter: (data: any) => void;
}

export const useFooterStore = create<FooterState>((set) => ({
  data: null,
  setFooter: (data) => set({ data }),
}));
