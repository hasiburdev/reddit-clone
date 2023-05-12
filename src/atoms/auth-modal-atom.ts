import { atom } from "recoil";

export interface AuthModalState {
  isOpen: boolean;
  view: "login" | "signup" | "resetPassword";
}

const defaultState: AuthModalState = {
  isOpen: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultState,
});
