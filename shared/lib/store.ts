import { create } from "vue-zustand";

export const useIntroStore = create((set) => ({
  introShown: false,
  setIntroShown: (value: boolean) => set(() => ({ introShown: value })),
}));
