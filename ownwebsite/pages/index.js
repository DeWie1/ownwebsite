import React, { Component, useState, useEffect } from "react";
import Head from 'next/head'
import Footer from './Footer'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Subscribe from './Subscribe'

export default function Home() {

  return (    
    <div className="h-screen scroll-snap-y">
      <Head>
        <title>Only a Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <About/>
      <Subscribe/>
      <Contact/>
      <Footer/> 

    </div>    
  )
}
