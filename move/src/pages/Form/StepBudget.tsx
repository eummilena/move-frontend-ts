import Button from '../../components/Button'
import styles from './Form.module.css'
import check from '../../assets/images/check.svg'
import { useData } from '../../context/DataContext'

const StepBudget = () => {

    const { setForm, orcamento, error } = useData();

    return (
        <>
            {error ? <h2 className='error'>Erro ao salvar orçamento. Tente novamente mais tarde.</h2> :
                (
                    <>
                        <img src={check} alt=" " className={styles.check} />
                        <h2>Tudo pronto.</h2>
                        {orcamento && (
                            <div className={styles.budget}>
                                <h3>Orçamento gerado</h3>

                                <p>
                                    <strong>R$ {orcamento.valor.toFixed(2).replace('.', ',')}</strong>
                                </p>

                                <p> <strong> Prazo:</strong> {orcamento.prazoDias} dias</p>
                                <p><strong>ID: </strong> {orcamento.id}</p>
                                <small>Orçamento salvo com sucesso</small>
                            </div>
                        )}
                        <h4>Em instantes você receberá o orçamento em seu e-mail.</h4>
                    </>)
            }
            <Button className={styles.closeButton} onClick={() => setForm(false)}>Fechar janela</Button>
        </>
    )
}

export default StepBudget