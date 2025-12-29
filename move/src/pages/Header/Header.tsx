import Button from '../../components/Button'
import styles from './Header.module.css'
import Logo from '../../assets/images/logo-move.webp'
import wallpaper480Webp from '../../assets/images/generated/wallpaper-house-480.webp'
import wallpaper768Webp from '../../assets/images/generated/wallpaper-house-768.webp'
import wallpaper1200Webp from '../../assets/images/generated/wallpaper-house-1200.webp'
import wallpaper2000Webp from '../../assets/images/generated/wallpaper-house-2000.webp'
import wallpaper480Avif from '../../assets/images/generated/wallpaper-house-480.avif'
import wallpaper768Avif from '../../assets/images/generated/wallpaper-house-768.avif'
import wallpaper1200Avif from '../../assets/images/generated/wallpaper-house-1200.avif'
import wallpaper2000Avif from '../../assets/images/generated/wallpaper-house-2000.avif'
import { useData } from '../../context/DataContext'
import Form from '../Form/Form'

const Header = () => {

    const { form, setForm } = useData();
    return (
        <header className={styles.header}>
            <picture aria-hidden="true" className={styles.bgPicture}>
                <source type="image/avif" srcSet={`${wallpaper480Avif} 480w, ${wallpaper768Avif} 768w, ${wallpaper1200Avif} 1200w, ${wallpaper2000Avif} 2000w`} sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px" />
                <source type="image/webp" srcSet={`${wallpaper480Webp} 480w, ${wallpaper768Webp} 768w, ${wallpaper1200Webp} 1200w, ${wallpaper2000Webp} 2000w`} sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px" />
                <img src={wallpaper1200Webp} className={styles.wallpaper} alt="" decoding="async" fetchPriority='high' />
            </picture>
            <img src={Logo} alt='Move' className='logo' fetchPriority="high" width="213" height="90" />
            <div className={styles.desc}>
                <h1>Mudar-se nunca foi tão fácil antes.</h1>
                <h2>Ajuda você a planejar, reservar toda a sua mudança do conforto da sua casa.</h2>
                <Button className='button' onClick={() => setForm(true)}>Faça seu orçamento</Button>
                {form && <Form />}
            </div>

        </header>
    )
}

export default Header