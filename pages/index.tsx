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
import { homePageIdxState, homePageBookSumState } from "atoms";
import { currentPageIdxQuery } from "selectors";

import styles from "../styles/HomePage.module.css";
import CommonLayout from "components/Layout";
import LeftNav from "components/Navigation/HomeLeftNav";
import BookInfoCard from "components/Card/BookInfo";
import { BookSekeleton } from "components/Skeleton/BookCardSkeleton";
import { Typography } from "@mui/material";

const PAGE_SIZE = 8;

const BookList = () => {
  const bookListLoadable = useRecoilValueLoadable(currentPageIdxQuery);
  const [homePageBookSum, setHomePageBookSum] =
    useRecoilState(homePageBookSumState);
  switch (bookListLoadable.state) {
    case "hasValue":
      setHomePageBookSum(bookListLoadable.contents.total);
      return (
        <div className={styles.bookList}>
          {bookListLoadable.contents.content.map((book) => (
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
  const [homePageBookSum] = useRecoilState(homePageBookSumState);

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
              {!!homePageBookSum && (
                <Typography
                  component="div"
                  variant="body2"
                  sx={{ padding: "1rem 0" }}
                >{`${PAGE_SIZE * (homePageIdx - 1) + 1} ~ ${
                  PAGE_SIZE * homePageIdx
                } of over ${homePageBookSum} results`}</Typography>
              )}
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
                  count={Math.ceil(homePageBookSum / PAGE_SIZE)}
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
