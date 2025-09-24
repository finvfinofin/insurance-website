import { create } from "zustand";

export interface ThemeType {
  theme: "light" | "dark";
  updateTheme: (theme: "light" | "dark") => void;

  isSticky: boolean;
  updateSticky: (sticky: boolean) => void;
}

const useThemeStore = create<ThemeType>((set) => ({
  theme: "light",
  updateTheme: (newTheme) => set({ theme: newTheme }),

  isSticky: false,
  updateSticky: (sticky) => set({ isSticky: sticky }),
}));

export default useThemeStore;
