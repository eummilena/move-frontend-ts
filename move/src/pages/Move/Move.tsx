import Button from '../../components/Button'
import styles from './Move.module.css'
import home from '../../assets/images/house.svg'
import truck from '../../assets/images/cargo-truck.svg'
import boxes from '../../assets/images/stack-package.svg'
import immediate from '../../assets/images/clock.svg'
import { useData } from '../../context/DataContext'
import Form from '../Form/Form'



const steps = [
    {
        id: 1,
        img: home,
        step: "1. Insira seus detalhes de movimentação.",
        desc: "Adicione os detalhes da mudança e obtenha o preço pela mudança imediatamente.",
    },
    {
        id: 2,
        img: boxes,
        step: "2. Organize tudo em um só lugar.",
        desc: "Vamos ajudá-lo a criar uma lista de coisas para mover. Vamos dominar isso juntos.",
    },
    {
        id: 3,
        img: immediate,
        step: "3. Dia de mudança. Sem pressa.",
        desc: "No grande dia, nossos carregadores chegam e fazem todo o trabalho duro.",
    },
    {
        id: 4,
        img: truck,
        step: "4. Pague somente após a mudança.",
        desc: "Pague somente após nossos funcionários concluírem toda mudança de seus pertences em sua nova.",
    }

]

const Move = () => {

    const { form, setForm } = useData();

    return (
        <section className={styles.section}>
            <h2 className={styles.subtitle}>Como funciona?</h2>
            <p>A move simplifica todo o processo de movimentação</p>
            <div className={styles.info} >
                <ul>
                    {steps.map(({ step, img, desc, id }) => (
                        <li key={id} className={styles.steps}>
                            <span className={styles.span}>
                                <img src={img} alt='' className={styles.img} />
                            </span>
                            <div className={styles.step}>
                                <p className={styles.stepDesc}>{step}</p>
                                <p>{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Button className='button' onClick={() => setForm(true)}>Faça um orçamento online</Button>
            {form && <Form />}
        </section>
    )
}

export default Move