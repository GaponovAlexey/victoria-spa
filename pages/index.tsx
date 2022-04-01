import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/homePage/Header'
import { HomepageTop } from '../components/homePage/HomepageTop'
import { HeaderImg } from '../components/homePage/HeaderImg'
import { About } from '../components/About'
import { ComentsPhoto } from '../components/coments/ComentsPhoto'
import { Certificates } from '../components/Sertificats/Certificates'
import { Contacts } from '../components/Contacts/Contacts'
import { Map } from '../components/map/Map'

const Home: NextPage = () => {
  return (
    <div>
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
