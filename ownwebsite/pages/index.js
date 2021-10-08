import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    
    <div className="h-[800px] ">
      <Head>
        <title>Only a Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero as Background*/}
      <div className="relative inset-0 h-full w-full bg-hero-pattern bg-cover">
        <div className='absolute inset-0 bg-gray-900 bg-opacity-30'>
          <Navbar/>
          <Hero/>


          <Footer/> 
        </div>
      </div>
  
    </div>
      
  )
}
