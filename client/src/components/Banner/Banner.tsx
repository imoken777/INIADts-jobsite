import React from 'react';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img className={styles.iniadTs} src="/img/INIADts-logo.png" alt="INIAD.tsのロゴ" />
        <img className={styles.iniad} src="/img/INIAD-long-logo.png" alt="INIADのロゴ" />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>INIAD.ts</p>
        <p className={styles.description}>廃人エンジニア育成サークルの比類なき稼働時間</p>
      </div>
    </div>
  );
};
