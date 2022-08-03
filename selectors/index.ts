import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { homePageIdxState } from "atoms";

import { fetchBooks } from "lib/http";

export const currentPageIdxQuery = selector({
  key: "CurrentPageIdx",
  get: async ({ get }) => {
    const page = get(homePageIdxState);
    const size = 8;
    const type = ``;
    const sort = ``;
    const response = await fetchBooks({ page, size, type, sort });
    return response;
  },
});
