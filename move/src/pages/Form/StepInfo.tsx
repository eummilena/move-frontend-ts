import Input from '../../components/Input'
import { useData } from '../../context/DataContext'

const StepInfo = () => {
    const { register, errors, touchedFields } = useData();

    return (
        <div>
            <div className="row">
                <Input
                    label="Nome"
                    id="nome"
                    placeholder="Ex: Maria"
                    {...register('nome')}
                    error={touchedFields.nome ? errors.nome?.message : undefined}
                />

                <Input
                    label="Sobrenome"
                    id="sobrenome"
                    placeholder="Ex: Silva"
                    {...register('sobrenome')}
                    error={touchedFields.sobrenome ? errors.sobrenome?.message : undefined}
                />
            </div>

            <div className="row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    autoComplete="on"
                    placeholder="Ex: nome@email.com"
                    {...register('email')}
                    error={touchedFields.email ? errors.email?.message : undefined}
                />

                <Input
                    label="Telefone"
                    id="telefone"
                    placeholder="(XX) - X XXXX-XXXX"
                    {...register('telefone')}
                    error={touchedFields.telefone ? errors.telefone?.message : undefined}
                />
            </div>
        </div>
    );
};

export default StepInfo;
