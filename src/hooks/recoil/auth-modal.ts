import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { authModalState } from "@/atoms/auth-modal-atom";

export const useAuthModalRecoil = () => {
  const [authModal, setAuthModal] = useRecoilState(authModalState);
  return [authModal, setAuthModal];
};
export const useSetAuthModalRecoil = () => {
  const setAuthModal = useSetRecoilState(authModalState);
  return setAuthModal;
};
export const useValueAuthModalRecoil = () => {
  const authModal = useRecoilValue(authModalState);
  return authModal;
};
