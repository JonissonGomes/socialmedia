import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import logoGlobo from "../utils/images/logo-academy.png";
import styles from "../styles/homepage.module.css";

const Home: NextPage = () => {

    const noticias = [
        {
            title: "Dev da delete sem where e acaba causando um acidente",
            describe: "O jovem possuia apenas 22 anos e hoje está procurando onde esconder a cabeça",
            date: '09/02/2022'
        },
        {
            title: "Região metropolitana recebe novos eventos para desmistificar o flutter",
            describe: "Aparentemente o novo surto do novo framework está causando complicações",
            date: '09/02/2022'
        },
        {
            title: "Após estourar tempo limite do projeto, estudante acaba indo tomar energético para melhorar sua performance",
            describe: "O adolecente procurou utilizar os mais diversos métodos quando acidentalmente esqueceu de enviar seu projeto no gmail",
            date: '09/02/2022'
        },
        {
            title: "Região metropolitana recebe novos eventos para desmistificar o flutter",
            describe: "Aparentemente o novo surto do novo framework está causando complicações",
            date: '09/02/2022'
        },
        {
            title: "Após estourar tempo limite do projeto, estudante acaba indo tomar energético para melhorar sua performance",
            describe: "O adolecente procurou utilizar os mais diversos métodos quando acidentalmente esqueceu de enviar seu projeto no gmail",
            date: '09/02/2022'
        },
    ]


  return (
    <div>
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
          <h1 className={styles.topic}>Notícias de dev</h1>

          <hr className={styles.separator} />
        {
              noticias.map( 
                  (noticias) => 
                      <>
                        <div className={styles.news}>
                            <p className={styles.titleNews}>{noticias.title}</p>
                            <p className={styles.describeNews}>{noticias.describe}</p>
                            <p className={styles.dateNews}>{noticias.date}</p>
                        </div>
                    </>
                )
            }
      </div>
    </div>
  );
};

export default Home;
