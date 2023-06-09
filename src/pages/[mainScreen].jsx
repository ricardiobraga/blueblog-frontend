"use client"
import styles from '@/src/styles/Home.module.css';



import MainScreen from '@/src/components/MainScreen';
import Head from 'next/head';



export default function Home() {


  return (
    <>
      <Head>
        <title>The Blue Blog</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>        
        <MainScreen />
      </main >

    </>
  )
}










