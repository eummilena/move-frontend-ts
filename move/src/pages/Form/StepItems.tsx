import { Controller } from "react-hook-form";
import Radio from "../../components/Radio";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import { useData } from '../../context/DataContext';
import { TamanhoMudanca } from "../../types/types";

const StepItems = () => {
    const { register, errors, control, touchedFields } = useData();

    return (
        <div>
            <div className="row">
                <Select
                    label="Tamanho da mudança"
                    options={TamanhoMudanca}
                    {...register("tamanho")}
                    error={touchedFields.tamanho ? errors.tamanho?.message : undefined}
                />
                <Controller
                    name="tipo"
                    control={control}
                    render={({ field }) => (
                        <Radio
                            name={field.name}
                            options={['Residencial', 'Industrial']}
                            value={field.value ?? ''}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            ref={field.ref}
                            error={touchedFields.tipo ? errors.tipo?.message : undefined}
                        />
                    )}

                />
            </div>

            <div className="row">
                <Textarea
                    label="Descrição dos Móveis"
                    id="descricao"
                    placeholder="Escreva aqui os móveis"
                    {...register("descricao")}
                    error={touchedFields.descricao ? errors.descricao?.message : undefined}
                />

                <Textarea
                    label="Observações/Comentários"
                    id="observacao"
                    placeholder="Suas observações"
                    {...register("observacao")}
                    error={touchedFields.observacao ? errors.observacao?.message : undefined}
                />
            </div>
        </div>
    );
};

export default StepItems;
