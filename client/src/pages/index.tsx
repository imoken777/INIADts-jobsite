import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Carousel } from '../components/Carousel/Carousel';
import { MemberIcons } from '../components/MemberIcons/MemberIcons';
import { products } from '../data/products';
import styles from './index.module.css';

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="INIAD.tsサイト">
      <Banner />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>INIAD.ts</h1>
          <p>INIAD(東洋大学情報連携学部)公認サークル</p>
          <Link to="/about">詳しく見る</Link>
        </div>
        <div className={styles.products}>
          <h2 className={styles.contentTitle}>2023年の主要プロダクト</h2>
          <Carousel carouselData={products} />
        </div>
        <div className={styles.activity}>
          <div className={styles.activityText}>
            <h2 className={styles.contentTitle}>主な活動</h2>
            <p>
              INIAD.tsでは、毎週水曜日に活動を行っています。
              活動内容は、プロダクト開発や、勉強会、LT会などです。
              また、毎年夏には、合宿を行っています。
              2021年度は、新型コロナウイルスの影響により、オンラインでの活動を行っています。
              2022年度以降は、東洋大学のキャンパスでの活動を予定しています。
              活動に興味がある方は、ぜひ、お気軽にお問い合わせください。
              また、INIAD.tsでは、毎年新入生を募集しています。
              新入生の方は、ぜひ、お気軽にお問い合わせください。
              お問い合わせは、TwitterのDM、または、メールにてお願いします。
              <br />
              <br />
              This sentence is written by GitHub Copilot.
            </p>
          </div>
          <div className={styles.activityImage}>
            <img
              src="https://www.toyo.ac.jp/nyushi/img/about/campus/akabanedai/gallery_img_03.jpg"
              alt="仮にINIADの写真を置いています"
            />
          </div>
        </div>
        <div className={styles.members}>
          <h2 className={styles.contentTitle}>メンバー</h2>
          <MemberIcons />
          <div />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
