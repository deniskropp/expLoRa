import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navList}>
                <Link href="/">Home</Link>
                <Link href="/list">List</Link>
            </div>
            <div className={styles.navIcons}>
                <svg width={40} height={40}>
                </svg>
            </div>
        </nav>
    )
}
