import React from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select';
import InputDate from '../../components/InputDate';

const estados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
];


const StepLocal = () => {
    return (
        <div>
            <Input
                label='Endereço para retirada'
                id='endereco'
                placeholder='Ex: Rua 123, n 9, Centro'
                name='endereco'
                autoComplete='on'
            />
            <div className="row">
                <Input
                    label='Cidade'
                    id='cidade'
                    placeholder='Campo Grande'
                    name='cidade'
                />
                <Select
                    options={estados}
                    label='Estado'
                />
            </div>
            <div className="row">
                <Input
                    label='CEP'
                    id='cep'
                />
                <InputDate
                    label='Data do envio'
                    placeholder='Selecione uma data'
                />
            </div>
        </div>
    )
}

export default StepLocal