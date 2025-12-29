import phone from '../../assets/images/phone-call.svg'
import cash from '../../assets/images/dollar.svg'
import shield from '../../assets/images/shield.svg'
import styles from './Services.module.css'


const services = [
    {
        icon: phone,
        topic: 'Atendimento Personalizado',
        description: 'Reserva simples online. Economize tempe e aborrecimento sem visitas domiciliares.',
    },

    {
        icon: shield,
        topic: 'Transporte com seguro premium',
        description: 'Oferecemos os melhores seguros do mercado. Cada um de nossos movimentos é coberto por um transporte premium abrangente.',
    },
    {
        icon: cash,
        topic: 'Totalmente transparente',
        description: 'Preços transparentes para todos os serviços Não precisa ser caro. Nós sabemos.',
    },
]

const Services = () => {
    return (
        <section className={styles.section} aria-labelledby="servicesHeading">
            <h2 id="servicesHeading">Nossos Serviços</h2>
            <h3>Serviços Personalizados</h3>
            <ul className={styles.services} role="list" aria-labelledby="servicesHeading">
                {services.map((serv) => (
                    <li key={serv.topic}>
                        <article>
                            <img src={serv.icon} alt="" aria-hidden="true" />
                            <h4>{serv.topic}</h4>
                            <p>{serv.description}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Services