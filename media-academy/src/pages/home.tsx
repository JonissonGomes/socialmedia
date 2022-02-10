import { NextPage } from "next";
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import api from "../utils/connectApi/axios";
import logoGlobo from "../utils/images/logo-academy.png";
import styles from "../styles/homepage.module.css";

const Home: NextPage = () => {
  const [listNews, setListNews] = useState([]);
  const [fastNews, setFastNews] = useState([]);

  const [search, setSearch] = useState("");

  const [urlApi, setUrlApi] = useState(
    "https://newsapi.org/v2/everything?sources=globo&sortBy=popularity&apiKey=55a1f8015d004ad1905a7a44f4c152e9"
  );

  const [urlApiFast, setUrlApiFast] = useState(
    "https://newsapi.org/v2/everything?q=brasil&sources=globo&apiKey=55a1f8015d004ad1905a7a44f4c152e9"
  );

  // Main content
  useEffect(() => {
    api
      .get(`${urlApi}`)
      .then((response) => {
        setListNews(response.data.articles);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  // Fast News
  useEffect(() => {
    api
      .get(`${urlApiFast}`)
      .then((response) => {
        console.log("Informações encontradas");
        setFastNews(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  function searchTopic(word: string) {
    let newParam = `q=${word}&`;
    let request = `https://newsapi.org/v2/everything?${newParam}sources=globo&sortBy=popularity&apiKey=55a1f8015d004ad1905a7a44f4c152e9`;
    api
      .get(`${request}`)
      .then((response) => {
        setFastNews(response.data.articles);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

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
          <input
            className={styles.input}
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={handleChange}
          />
          <button
            className={styles.inputSearch}
            type="submit"
            onClick={() => searchTopic(search)}
          >
            <p className={styles.inputSearchText}>buscar</p>
          </button>
        </section>
      </div>

      <div className={styles.contentMain}>
        <h1 className={styles.topic}>Notícias de hoje</h1>

        <hr className={styles.separator} />
        <div className={styles.contentBox}>
          <div className={styles.newsMain}>
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

          <div className={styles.newsFasterBox}>
            <p className={styles.titleFastHeader}>Notícias rápidas</p>
            <div>
              {fastNews.map((newsFast, index) => (
                <>
                  <div key={index} className={styles.newsFaster}>
                    <section className={styles.newsContent}>
                      <p className={styles.titleFastNews}>{newsFast.title}</p>
                      <p className={styles.authorFastNews}>{newsFast.author ? newsFast.author : 'Redator da globo'}</p>
                      <p className={styles.dateFastNews}>
                        {formatDate(newsFast.publishedAt)}
                      </p>
                      <p className={styles.contentNews}>{newsFast.content}</p>
                      <Link href={newsFast.url}>
                        <p className={styles.readMore}>Ler mais</p>
                      </Link>
                    </section>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
