import Button from '../../components/Button'
import { useEffect, type ReactNode } from 'react'
import { useData } from '../../context/DataContext'
import StepBudget from './StepBudget';
import StepInfo from './StepInfo';
import StepItems from './StepItems';
import StepLocal from './StepLocal';
import styles from './Form.module.css'
import Steps from './Steps';
import type { IFormData } from '../../schema/formSchema';
import useMedia from '../../hooks/useMedia';
import { criarOrcamento } from '../../services/orcamento.api.ts';
import Loading from '../../components/Loading.tsx';



const Form = () => {
    const { slide, setSlide, form, setForm,
        handleSubmit, isDirty, trigger, loading,
        setLoading, setError,
        setOrcamento } = useData();

    const isMobile = useMedia('(max-width:1000px)');

    const stepsMap: Record<number, ReactNode> = {
        1: <StepInfo />,
        2: <StepItems />,
        3: <StepLocal />,
        4: <StepBudget />,
    };

    const stepFields: Record<number, Array<keyof IFormData>> = {
        1: ["nome", "sobrenome", "email", "telefone"],
        2: ["tamanho", "tipo", "descricao", "observacao"],
        3: ["endereco", "cidade", "estados", "cep", "data"],
        4: [],
    }

    const prevStep = () => {
        setSlide((prev) => Math.max(prev - 1, 1));
    }

    const nextStep = async () => {
        const current = stepFields[slide] ?? [];

        if (current.length > 0) {
            const valid = await trigger(current as any);
            if (!valid) return;
        }

        setSlide((prev) => Math.min(prev + 1, 4));
    }

    useEffect(() => {

        if (!form) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') setForm(false);
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [form, setForm])


    const onSubmit = async (data: IFormData) => {
        try {
            setLoading(true);
            setError("");

            const response = await criarOrcamento(data);

            setOrcamento(response);

        } catch {
            setError("Error ao gerar orçamento");
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className={`${styles.modal}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="Formulário"
        >
            {loading && <div className={styles.loadingOverlay}><Loading overlay /></div>}
            <Button className={` ${styles.close}`} onClick={() => setForm(false)}
            >Fechar</Button>
            <div className={`${styles.modalForm}`}>
                <h1>Vamos começar?</h1>
                <Steps />
                <form className={`${slide === 4 ? styles.form : styles.formGrid} ${isMobile ? styles.formMobile : ''}`} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputs}>
                        {stepsMap[slide]}
                    </div>
                    <div className={`${slide === 4 ? styles.disappear : styles.buttons}`}>
                        <Button onClick={prevStep} disabled={slide === 1} className={`${styles.prev}`}>Voltar</Button>
                        <Button onClick={nextStep} disabled={!isDirty} className={`${styles.next}`}>{slide === 3 ? 'Enviar' : 'Próximo'}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form