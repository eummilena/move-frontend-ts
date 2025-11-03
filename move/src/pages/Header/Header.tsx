import Button from '../../components/Button'
import styles from './Header.module.css'
import Logo from '../../assets/images/logo-move.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt='Move' />
            <div className={styles.desc}>
                <h1>Mudar-se nunca foi tão fácil antes.</h1>
                <h2>Ajuda você a planejar, reservar toda a sua mudança do conforto da sua casa.</h2>
                <Button>Faça seu orçamento</Button>
            </div>

        </header>
    )
}

export default Header