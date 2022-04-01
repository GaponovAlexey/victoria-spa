import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/homePage/Header'
import { HomepageTop } from '../components/homePage/HomepageTop'
import { HeaderImg } from '../components/homePage/HeaderImg'
import { About } from '../components/About'
import { ComentsPhoto } from '../components/coments/ComentsPhoto'
import { Certificates } from '../components/Sertificats/Certificates'
import { Contacts } from '../components/Contacts/Contacts'
import { Map } from '../components/map/Map'
import { css } from '@emotion/css'
import useSWR from 'swr'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Педикюр у Виктории</title>
        <link rel='icon' href='#!' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div
        id='home'
        className={css`
          width: 960px;
          font-family: 'Raleway', sans-serif;
          margin: 0 auto;
          @media (max-width: 768px) {
            max-width: 710px;
          }
          @media (max-width: 420px) {
            max-width: 350px;
          }
        `}
      >
        <Header />
        <HomepageTop />
        <HeaderImg />
        <About />
        <ComentsPhoto />
        <Certificates />
        <Map />
        <Contacts />
      </div>
    </>
  )
}

export default Home
