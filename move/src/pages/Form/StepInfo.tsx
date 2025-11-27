import React from 'react'
import Input from '../../components/Input'
import { useData } from '../../context/DataContext'

const StepInfo = () => {


    return (
        <div>
            <div className='row'>
                <Input
                    label='Nome'
                    id='nome'
                    type='text'
                    placeholder='Ex: Maria'
                    required
                    aria-required='true'
                />

                <Input
                    label="Sobrenome"
                    id="sobrenome"
                    type="text"
                    placeholder='Ex: Silva'
                    required
                    aria-required='true'
                />

            </div>
            <div className='row'>
                <Input
                    label="Email"
                    id='email'
                    type="email"
                    placeholder='Ex: nome@email.com'
                    required
                    aria-required='true'
                    autoComplete='on'
                />

                <Input
                    label="Telefone"
                    id="telefone"
                    type="text"
                    placeholder='(XX) - X XXXX-XXXX'
                    aria-required='true'
                />

            </div>
        </div>
    )
}

export default StepInfo