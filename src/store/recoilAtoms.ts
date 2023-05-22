import { atom } from 'recoil';

// 나중에 추가 예정
type User = {
  id: number;
  name: string;
  email: string;
}

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: false,
});

export const userDataState = atom<User | null>({
  key: 'userDataState',
  default: null,
});