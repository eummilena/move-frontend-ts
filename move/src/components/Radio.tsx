import React from 'react'
import { useData } from '../context/DataContext'

type RadioProps = React.ComponentProps<'input'> & {
    option?: React.ReactNode
    options: [string, string]
    checked?: boolean
    setValue?: (value: string) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    legend?: string
}

const Radio: React.FC<RadioProps> = ({ name, value: propValue, option, options, checked, setValue, onChange, id, legend, ...props }) => {
    const { value: ctxValue, setValue: ctxSetValue } = useData()

    const groupValue = propValue ?? ctxValue
    const groupSetValue = setValue ?? ctxSetValue

    // Segurança: se por algum motivo `options` não tiver exatamente duas, normaliza para os dois primeiros
    const opts = Array.isArray(options) ? options.slice(0, 2) as [string, string] : ['', '']

    return (
        <fieldset className='row'>
            <legend>{legend ?? name}</legend>
            {opts.map((op) => {
                const inputId = `${name}-${op}`
                const isChecked = groupValue === op
                function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
                    if (groupSetValue) groupSetValue(e.target.value)
                    if (onChange) onChange(e)
                }
                return (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }} key={op}>
                        <input
                            type="radio"
                            id={inputId}
                            name={name}
                            value={op}
                            checked={isChecked}
                            onChange={handleChange}
                            {...props}
                        />
                        <label htmlFor={inputId}>{op}</label>
                    </div>

                )
            })}
        </fieldset>
    )
}


export default Radio