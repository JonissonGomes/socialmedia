import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import api from "../utils/connectApi/axios";
import logoGlobo from "../utils/images/logo-academy.png";
import styles from "../styles/homepage.module.css";

const Home: NextPage = () => {

  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    api
      .get(
        `https://newsapi.org/v2/everything?sources=globo&sortBy=popularity&apiKey=55a1f8015d004ad1905a7a44f4c152e9`
      )
      .then((response) => {
        console.log("Informações encontradas");
        setListNews(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  function formatDate() {
    let dateParam = new Date(),
      dia = dateParam.getDate().toString().padStart(2, "0"),
      mes = (dateParam.getMonth() + 1).toString().padStart(2, "0"),
      ano = dateParam.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
  return (
    <div>
      <div className={styles.header}>
        <section className={styles.boxUrl}>
          <Link href={"/"}>
            <p className={styles.colorBlue}>globo.com</p>
          </Link>
          <p className={styles.divisor}>|</p>
          <Link href={"/"}>
            <p className={styles.colorBrown}>g1</p>
          </Link>
          <p className={styles.divisor}>|</p>
          <Link href={"/"}>
            <p className={styles.colorGreen}>ge</p>
          </Link>
          <p className={styles.divisor}>|</p>
          <Link href={"/"}>
            <p className={styles.colorOrange}>gshow</p>
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

      <div className={styles.navBar}>
        <section className={styles.logo}>
          <Link href={"/"}>
            <Image src={logoGlobo} height={32} width={32} />
          </Link>
        </section>

        <section className={styles.logo}>
          <p className={styles.fakeG1}>G1</p>
        </section>

        <section className={styles.logo}>
          <input className={styles.input} type="text" placeholder="Buscar" />
        </section>
      </div>

      <div className={styles.contentMain}>
        <h1 className={styles.topic}>Notícias de hoje</h1>

        <hr className={styles.separator} />
        {listNews.map((noticias, index) => (
          <>
            <div key={index} className={styles.news}>
              <section className={styles.imageContent}>
                <Image src={noticias.urlToImage} width={300} height={200} />
              </section>
              <section className={styles.newsContent}>
                <p className={styles.titleNews}>{noticias.title}</p>
                <p className={styles.author}>{noticias.author}</p>
                <p className={styles.dateNews}>
                  {formatDate(noticias.publishedAt)}
                </p>
                <p className={styles.contentNews}>{noticias.content}</p>
                <Link href={noticias.url}>
                    <p className={styles.readMore}>Ler mais</p>
                </Link>
              </section>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
