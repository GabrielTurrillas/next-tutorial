import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabo List | Home</title>
        <meta name="keywords" content="Gabo bros" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Aliquip consectetur laboris eiusmod qui duis eiusmod. Nostrud nulla irure anim dolore duis occaecat eiusmod minim. Minim magna nostrud dolore dolor do ea aliquip ipsum veniam magna officia pariatur ullamco. Ad esse quis ad quis aliqua do adipisicing adipisicing ut id voluptate. Sint est adipisicing commodo ut reprehenderit ipsum ad id laborum culpa excepteur. Cupidatat esse velit cupidatat Lorem. Elit Lorem veniam nulla non elit quis pariatur adipisicing minim quis voluptate eu do.</p>
        <p className={styles.text}>Aliquip consectetur laboris eiusmod qui duis eiusmod. Nostrud nulla irure anim dolore duis occaecat eiusmod minim. Minim magna nostrud dolore dolor do ea aliquip ipsum veniam magna officia pariatur ullamco. Ad esse quis ad quis aliqua do adipisicing adipisicing ut id voluptate. Sint est adipisicing commodo ut reprehenderit ipsum ad id laborum culpa excepteur. Cupidatat esse velit cupidatat Lorem. Elit Lorem veniam nulla non elit quis pariatur adipisicing minim quis voluptate eu do.</p>
        <Link href='/gabos'>
          <a className={styles.btn}>See Gabo Listing</a>
        </Link>
      </div>
    </>
  )
}
