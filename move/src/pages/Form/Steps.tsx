import React from 'react'
import { useData } from '../../context/DataContext'
import styles from './Steps.module.css'



const steps = [
    {
        id: 1,
        title: 'Suas informações'
    },
    {
        id: 2,
        title: 'Itens da mudança'
    },
    {
        id: 3,
        title: 'Sua localização'
    },
    {
        id: 4,
        title: 'Localização Entrega'
    }
]

const Steps = () => {

    const { slide } = useData();


    return (
        <nav aria-label="Progresso do formulário de mudança">
            <ol className={styles.steps}>
                {steps.map((step) => (
                    <li key={step.id} className={`${styles.step} 
                            ${slide >= step.id ? styles.active : styles.disabled}`}
                        aria-current={slide === step.id ? 'step' : undefined}
                        aria-disabled={slide < step.id}
                    >
                        <span
                            className={`
                            ${slide >= step.id ? styles.active : styles.disabled}`}
                            aria-label={`Etapa ${step.id} de ${steps.length}`}
                        >
                            {step.id}
                        </span>
                        {step.title}
                    </li>
                ))}

            </ol>
        </nav>
    )
}

export default Steps