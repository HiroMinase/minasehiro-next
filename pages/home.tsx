import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className={styles.container}>
        <Head>
          <title>水瀬ひろ</title>
          <meta name="description" content="水瀬ひろのポートフォリオサイト" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />

          <div className={styles.homeImage}>
            <Image
              src="/assets/images/home.jpg"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>

          <div className={styles.apps}>
            <Link href="/photographs/nature" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image
                    src="/assets/images/icon/nature_icon.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                Nature
              </a>
            </Link>
            <Link href="/photographs/portrait" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image
                    src="/assets/images/icon/portrait_icon.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                Portrait
              </a>
            </Link>
            <Link href="/photographs/snap" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image
                    src="/assets/images/icon/snap_icon.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                Snap
              </a>
            </Link>
            <Link href="/photographs/best_wishes" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image
                    src="/assets/images/icon/best_wishes_icon.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                Best wishes
              </a>
            </Link>
            <Link href="/profile" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image
                    src="/assets/images/icon/profile_icon.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                Profile
              </a>
            </Link>
            <Link href="/apps" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image
                    src="/assets/images/icon/apps_icon.jpg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                Apps
              </a>
            </Link>
            <a
              href="https://instagram.com/minasehiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.appIcon}>
                <Image
                  src="/assets/images/icon/instagram_icon.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              Instagram
            </a>
            <a
              href="https://twitter.com/minase_hiro_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.appIcon}>
                <Image
                  src="/assets/images/icon/twitter_icon.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              Twitter
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
