import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <Image src="/vercel.svg" width={72} height={16} alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    )
}
