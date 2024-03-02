import React from 'react'
import Head from 'next/head'
import Main from '../src/components/Main'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>expLoRa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <Main />

            <Footer />
        </div>
    )
}
