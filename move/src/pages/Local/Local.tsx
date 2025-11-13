import React from 'react'
import styles from './Local.module.css'
import gps from '../../assets/images/gps.svg'

const Local = () => {
    return (
        <section className={styles.section}>
            <div className={styles.address}>
                <p>Move - Centro, n123</p>
                <span> (xx)  x xxxx-xxxx</span>
                <span> (xx)  x xxxx-xxxx</span>
            </div>
            <div className={styles.local}>
                <img src={gps} alt="Ponto de localização" />
            </div>
        </section>
    )
}

export default Local