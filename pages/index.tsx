import { css } from '@emotion/css'
import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import { ComentsPhoto } from '../components/coments/ComentsPhoto'
import { Contacts } from '../components/Contacts/Contacts'
import { Header } from '../components/homePage/Header'
import { HeaderImg } from '../components/homePage/HeaderImg'
import { HomepageTop } from '../components/homePage/HomepageTop'
import { Map } from '../components/map/Map'
import { Certificates } from '../components/Sertificats/Certificates'

const Home: NextPage = () => {
  return (
    <>
      <Head>
      <link
            rel="preload"
            href="/fonts/andika/andika-v19-latin-regular.ttf"
            as="font"
            crossOrigin=""
          />
        <title>Педикюр у Виктории</title>
        <link rel='icon' href='#!' />
        <link rel='stylesheet' href=' ' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
          rel='stylesheet'
        />
      </Head>
      <div id='home' className='mainIndex' style={{ fontFamily: 'Kharkiv' }}>
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
