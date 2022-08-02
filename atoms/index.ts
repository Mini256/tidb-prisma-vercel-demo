import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { shoppingCartItemProps } from "const";

// export const homeBookListState = atom({
//   key: "homeBookListState",
//   default: [],
// });

export const homePageIdxState = atom({
  key: "homePageIdxState",
  default: 1,
});

export const homePageBookSumState = atom({
  key: "homePageBookSumState",
  default: 0,
});

export const shoppingCartState = atom<shoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});

// export const snackbarState = atom<{
//   timestamp: string;
//   message: string;
//   variant: "error" | "warning" | "info" | "success";
// } | null>({
//   key: "snackbarState",
//   default: null,
// });
