import styles from './Footer.module.css';

export const Footer = () => {
  const Circle = () => {
    return <svg className={styles.circle} />;
  };
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <div className={styles.tabItem}>PROBLEMS</div>
        <div className={styles.tabItem}>OUTPUT</div>
        <div className={styles.tabItem}>DEBUG CONSOLE</div>
        <div className={`${styles.tabItem} ${styles.choice}`}>TERMINAL</div>
      </div>
      <div className={styles.body}>
        <p className={styles.p}>
          <Circle />
          PS C:\Toyo\INIAD\INIAD.ts{'>'} <span className={styles.git}>cat</span> contact.ts
        </p>
        <p className={styles.p}>INIAD.ts メールアドレスなどを張る</p>
        <p className={styles.p}>
          <Circle />
          PS C:\Toyo\INIAD\INIAD.ts{'>'} <span className={styles.git}>echo</span> copyright
        </p>
        <p className={styles.p}>© 2023 INIAD.ts</p>
      </div>
    </div>
  );
};
