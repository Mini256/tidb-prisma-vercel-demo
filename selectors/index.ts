import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { homePageQueryState } from "atoms";

import { fetchBooks } from "lib/http";

export const homePageQuery = selector({
  key: "homePage",
  get: async ({ get }) => {
    const { page, size, type, sort } = get(homePageQueryState);
    const response = await fetchBooks({ page, size, type, sort });
    return response;
  },
});
