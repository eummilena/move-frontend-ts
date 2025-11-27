import Input from "../../components/Input"
import Radio from "../../components/Radio"
import Select from "../../components/Select"
import Textarea from "../../components/Textarea"
import { useData } from '../../context/DataContext'


const options = [
    { id: 'grande', nome: 'Grande Porte' },
    { id: 'medio', nome: 'Médio Porte' },
    { id: 'pequeno', nome: 'Pequeno Porte' },
]

const StepItems = () => {

    const { value, setValue } = useData();

    return (
        <div>
            <div className="row">
                <Select
                    label="Tamanho da mudança"
                    options={options}
                />

                <Radio
                    name="tipoMudanca"
                    options={['Residencial', 'Industrial']}
                    legend="Tipo de mudança"
                    value={value}
                    setValue={setValue}
                />
            </div>
            <div className="row">
                <Textarea
                    label="Descrição dos Móveis"
                    id="desc"
                    placeholder="Escreva aqui os móveis"
                />
                <Textarea
                    label="Observações/Comentários"
                    id="obs"
                    placeholder="Suas observações"
                />
            </div>
        </div>
    )
}

export default StepItems