import Button from '../../components/Button'
import type { ReactNode } from 'react'
import { useData } from '../../context/DataContext'
import StepBudget from './StepBudget';
import StepInfo from './StepInfo';
import StepItems from './StepItems';
import StepLocal from './StepLocal';
import styles from './Form.module.css'

const Form = () => {
    const { slide, setSlide } = useData();

    const prevStep = () => {
        setSlide((prev) => Math.max(prev - 1, 1));
    }

    const nextStep = () => {
        setSlide((prev) => Math.min(prev + 1, 4));
    }


    const stepsMap: Record<number, ReactNode> = {
        1: <StepInfo />,
        2: <StepItems />,
        3: <StepLocal />,
        4: <StepBudget />,
    };

    const content = stepsMap[slide] ?? null;


    return (
        <div className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="Formulário">
            <div className={styles.modalForm}>
                <h1>Vamos começar?</h1>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div>
                        {content}
                    </div>
                    <div className={styles.buttons}>
                        <Button onClick={prevStep} disabled={slide === 1} className={styles.prev}>Voltar</Button>
                        <Button onClick={nextStep} disabled={slide === 4} className={styles.next}>Próximo</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form