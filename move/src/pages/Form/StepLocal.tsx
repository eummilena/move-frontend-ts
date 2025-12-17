import { Controller } from 'react-hook-form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import InputDate from '../../components/InputDate';
import { useData } from '../../context/DataContext';
import { EstadosBrasil } from '../../types/types';
import useMedia from '../../hooks/useMedia';

const formatDateToInput = (value?: Date | string | null) => {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const StepLocal = () => {
    const { register, errors, touchedFields, control } = useData();
    const isMobile = useMedia('(max-width:1000px)');

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

            <div className={`${isMobile ? 'col' : 'row'}`}>
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

            <div className={`${isMobile ? 'col' : 'row'}`}>
                <Input
                    label="CEP"
                    id="cep"
                    {...register("cep")}
                    error={touchedFields.cep ? errors.cep?.message : undefined}
                />

                <Controller
                    control={control}
                    name="data"
                    defaultValue={undefined}
                    render={({ field }) => (
                        <InputDate
                            label="Data do envio"
                            placeholder="Selecione uma data"
                            id="data"
                            value={formatDateToInput(field.value)}
                            onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : undefined)}
                            onBlur={field.onBlur}
                            error={touchedFields.data ? errors.data?.message : undefined}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default StepLocal;
