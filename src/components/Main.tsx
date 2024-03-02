import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../../styles/Home.module.css'

export default function Main() {
    const [list, setList] = useState([])

    useEffect(() => {
        async function getList() {
            const options = {
                url: '/api/lora',
                method: 'POST',
                data: {
                    target: 'list'
                }
            }

            try {
                const response = await axios.request(options)

                setList(response.data.list)
            }
            catch (error) {
                console.error(error)
            }
        }

        getList()
    }, [setList])

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Hello</h1>

            <div className={styles.description}>
                This is expLoRa!
            </div>

            <ul>
                {list.map((item: any, i: number) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </main>
    )
}
