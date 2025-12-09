import Input from '../../components/Input';
import Select from '../../components/Select';
import InputDate from '../../components/InputDate';
import { useData } from '../../context/DataContext';
import { EstadosBrasil } from '../../types/types';

const StepLocal = () => {
    const { register, errors, touchedFields } = useData();

    return (
        <div>
            <Input
                label="Endereço para retirada"
                id="endereco"
                autoComplete="on"
                placeholder="Ex: Rua 123, n 9, Centro"
                {...register("endereco")}
                error={touchedFields.endereco ? errors.endereco?.message : undefined}
            />

            <div className="row">
                <Input
                    label="Cidade"
                    id="cidade"
                    placeholder="Campo Grande"
                    {...register("cidade")}
                    error={touchedFields.cidade ? errors.cidade?.message : undefined}
                />

                <Select
                    label="Estado"
                    id="estados"
                    options={EstadosBrasil}
                    {...register("estados")}
                    error={touchedFields.estados ? errors.estados?.message : undefined}
                />
            </div>

            <div className="row">
                <Input
                    label="CEP"
                    id="cep"
                    {...register("cep")}
                    error={touchedFields.cep ? errors.cep?.message : undefined}
                />

                <InputDate
                    label="Data do envio"
                    placeholder="Selecione uma data"
                    {...register("data", {
                        setValueAs: (value) => value ? new Date(value) : undefined
                    })}
                    error={touchedFields.data ? errors.data?.message : undefined}
                />
            </div>
        </div>
    );
};

export default StepLocal;
