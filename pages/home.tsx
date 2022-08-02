import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { homePageIdxState } from "atoms";
import { currentPageIdxQuery } from "selectors";

import styles from "../styles/HomePage.module.css";
import CommonLayout from "components/Layout";
import LeftNav from "components/Navigation/HomeLeftNav";
import BookInfoCard from "components/Card/BookInfo";
import { BookSekeleton } from "components/Skeleton/BookCardSkeleton";
import { Suspense } from "react";

const MOCK_books = Array.from(Array(8)).map((_, idx) => ({
  id: idx,
  title: `Book Title ${idx}`,
  type: "mock",
  price: 20.4,
  avgRatings: 3.1,
}));

const PAGE_SIZE = 8;

const BookList = () => {
  const bookListLoadable = useRecoilValueLoadable(currentPageIdxQuery);
  switch (bookListLoadable.state) {
    case "hasValue":
      return (
        <div className={styles.bookList}>
          {bookListLoadable.contents.map((book) => (
            <BookInfoCard key={book.id} {...book} />
          ))}
        </div>
      );
    case "loading":
      return (
        <div className={styles.bookList}>
          {Array.from(Array(PAGE_SIZE)).map((i, idx) => (
            <BookSekeleton key={idx} />
          ))}
        </div>
      );
    case "hasError":
      throw bookListLoadable.contents;
  }
};

const Home: NextPage = () => {
  const [homePageIdx, setHomePageIdx] = useRecoilState(homePageIdxState);

  return (
    <>
      <Head>
        <title>Bookstore Home</title>
        <meta name="description" content="Bookstore Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommonLayout>
        <div className={styles.content}>
          <LeftNav className={styles.nav} />
          <main className={styles.main}>
            <Container>
              <BookList />
              <Box
                sx={{
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  count={10}
                  page={homePageIdx}
                  color="primary"
                  onChange={(
                    event: React.ChangeEvent<unknown>,
                    page: number
                  ) => {
                    setHomePageIdx(page);
                  }}
                />
              </Box>
            </Container>
          </main>
        </div>
      </CommonLayout>
    </>
  );
};

export default Home;
