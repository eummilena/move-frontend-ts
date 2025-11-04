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
        <section className={styles.section}>
            <h2>Nossos Serviços</h2>
            <h3>Serviços Personalizados</h3>
            <div className={styles.services}>
                {services.map((serv) => (
                    <article key={serv.icon}>
                        <img src={serv.icon} alt='' />
                        <h4>{serv.topic}</h4>
                        <p>{serv.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services