import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/homePage/Header'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Педикюр у Виктории</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <HomepageTop />
      <HeaderImg />
      <About />
      <ComentsPhoto />
      <Certificates />
      <Map />
      <Contacts />
    </div>
  )
}

export default Home
