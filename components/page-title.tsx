interface PageTitleProps {
  cursive: string;
  remaining: string;
}

import styles from './ui.module.scss';

export default function PageTitle({ cursive, remaining }: PageTitleProps) {
  return (
    <h1 className={styles.pageTitle}>
      <div className={styles.pageTitle__cursive}>{cursive}</div>
      <div className={styles.pageTitle__remaining}>{remaining}</div>
    </h1>
  );
}
