import styles from './Product.module.css';

export type ProductProps = {
  product: { title: string; description: string; url: string };
};

export const Product = ({ product }: ProductProps) => {
  //あとからgithubのロゴを表示するための仮丸
  const iconCircle = {
    width: '70px',
    height: '70px',
    borderRadius: '10%',
    backgroundColor: 'white',
    display: 'flex',
    marginRight: '10px',
  };
  return (
    <div className={styles.container}>
      <div className={styles['title-box']}>
        <span className={styles.title}>{product.title}</span>
        <div className={styles.description}>{product.description}</div>
        <div className={styles['link-box']}>
          <div className={styles.link}>
            <a href={product.url} style={iconCircle} />
          </div>
          <div className={styles.link}>
            <a href={product.url} style={iconCircle} />
          </div>
        </div>
      </div>
    </div>
  );
};
