import { create } from "zustand";

export interface ModalType {
  isWaitlistModal: boolean;
  setIsWaitlistModal: (sticky: boolean) => void;
}

const useModalStore = create<ModalType>((set) => ({
  isWaitlistModal: false,
  setIsWaitlistModal: (isOpen) => set({ isWaitlistModal: isOpen }),
}));

export default useModalStore;
