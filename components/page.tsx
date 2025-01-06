import React from 'react';
import Menu from './menu';
import Image from 'next/image';
import styles from './layout.module.scss';
import Link from 'next/link';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className={styles.page}>
      <Menu />
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <a
          className={styles.footer__link}
          href="https://twitter.com/leechylabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="File icon" width={16} height={16} />
          Twitter
        </a>
        <a
          className={styles.footer__link}
          href="https://bsky.app/profile/leechylabs.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Window icon" width={16} height={16} />
          Bluesky
        </a>
        <Link className={styles.footer__link} href="/privacy">
          <Image aria-hidden src="/file.svg" alt="Globe icon" width={16} height={16} />
          Privacy Policy
        </Link>
        <Link className={styles.footer__link} href="/data-request">
          <Image aria-hidden src="/file.svg" alt="Globe icon" width={16} height={16} />
          Update or delete your data
        </Link>
      </footer>
    </div>
  );
}
