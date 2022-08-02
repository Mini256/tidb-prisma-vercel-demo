import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { homePageIdxState } from "atoms";

import { fetchBooks } from "lib/http";

export const currentPageIdxQuery = selector({
  key: "CurrentPageIdx",
  get: async ({ get }) => {
    const response = await fetchBooks(get(homePageIdxState), 8, 1);
    return response;
  },
});
