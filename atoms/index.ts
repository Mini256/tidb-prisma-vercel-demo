import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { BookInfoCardProps } from "components/Card/BookInfo";
// export const homeBookListState = atom({
//   key: "homeBookListState",
//   default: [],
// });

export const homePageIdxState = atom({
  key: "homePageIdxState",
  default: 1,
});

export const shoppingCartState = atom<BookInfoCardProps[]>({
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
