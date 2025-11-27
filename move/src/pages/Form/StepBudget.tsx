import Button from '../../components/Button'
import styles from './Form.module.css'
import check from '../../assets/images/check.svg'
import { useData } from '../../context/DataContext'

const StepBudget = () => {

    const { setForm } = useData();

    return (
        <>
            <img src={check} alt=" " className={styles.check} />
            <h2>Tudo pronto.</h2>
            <h3>Em instantes você receberá o orçamento em seu e-mail.</h3>
            <Button className={styles.closeButton} onClick={() => setForm(false)}>Fechar janela</Button>
        </>
    )
}

export default StepBudget