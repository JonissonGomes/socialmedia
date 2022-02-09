import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import logoGlobo from "../utils/images/logo-academy.png";
import styles from "../styles/homepage.module.css";

const Home: NextPage = () => {
  const project = "</ Academy>";

  return (
    <div className={styles.header}>
      <section className={styles.boxUrl}>
        <Link href={"/"}>
          <p className={styles.colorBlue}>globo.com</p>
        </Link>
        <p className={styles.divisor}>|</p>
        <Link href={"/"}>
          <p className={styles.colorGreen}>g1</p>
        </Link>
        <p className={styles.divisor}>|</p>
        <Link href={"/"}>
          <p className={styles.colorOrange}>ge</p>
        </Link>
        <p className={styles.divisor}>|</p>
        <Link href={"/"}>
          <p className={styles.colorBlue}>vídeos</p>
        </Link>
        <p className={styles.divisor}>|</p>
        <Link href={"/"}>
          <p className={styles.colorDarkBlue}>o globo</p>
        </Link>
      </section>

      <section className={styles.boxRight}>
        <Link href={"/home"}>
          <p className={styles.options}>ASSINE JÁ</p>
        </Link>

        <Link href={"/home"}>
          <p className={styles.options}>E-MAIL</p>
        </Link>

        <Link href={"/home"}>
          <button className={styles.optionsButton}>
            <p className={styles.options}>{"ENTRAR >"}</p>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
