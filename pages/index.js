import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import News from '../components/News'


export default function Home() {
  return (
    <div>
      <Head>
        <title>EarthHelp</title>
        <link href='/favicon.ico'/>
      </Head>
      <Main />
      <About />
      <News />
    </div>
  )
}
