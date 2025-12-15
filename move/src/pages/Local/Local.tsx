import styles from './Local.module.css'
import logo from '../../assets/images/logo-move.webp'

const Local = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo move" loading='lazy' />
            </div>
            <div className={styles.address}>
                <h3>Move - Centro, n123</h3>
                <p> (61) 3162-0215</p>
                <p> (61) 2131-5768</p>
            </div>
        </footer>
    )
}

export default Local