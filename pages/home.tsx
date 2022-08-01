import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";

import styles from "../styles/HomePage.module.css";
import CommonLayout from "components/Layout";
import LeftNav from "components/Navigation/HomeLeftNav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommonLayout>
        <div className={styles.content}>
          <LeftNav className={styles.nav} />
          <main className={styles.main}>
            <Container>test</Container>
          </main>
        </div>
      </CommonLayout>
    </>
  );
};

export default Home;