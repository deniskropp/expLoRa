import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>expLoRa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className={styles.nav}>
                <div cLassName={styles.navList}>
                    <Link href="/">Home</Link>
                    &nbsp;
                    <Link href="/list">List</Link>
                </div>
            </nav>

            <main className={styles.main}>
                <h1 className={styles.title}>Hello</h1>

                <div className={styles.description}>
                    This is expLoRa!
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
