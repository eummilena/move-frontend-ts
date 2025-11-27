import { useData } from "../context/DataContext";

type OptionObj = { id: string; nome: string }

type SelectProps = React.ComponentProps<'select'> & {
    label: string;
    // aceita strings ou objetos {id,nome}
    options: Array<string | OptionObj>;
}

const sanitize = (s: string) => String(s).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

const Select = ({ id, label, options, value: valueProp, onChange: onChangeProp, ...props }: SelectProps) => {

    const { value: ctxValue, setValue: ctxSetValue } = useData();

    const inputId = id ?? `select-${sanitize(label)}`

    const value = valueProp ?? ctxValue

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if (onChangeProp) onChangeProp(e)
        else if (ctxSetValue) ctxSetValue(e.target.value)
    }

    const opts = Array.isArray(options)
        ? options.map(o => typeof o === 'string' ? { id: sanitize(o), nome: o } : o)
        : []

    return (
        <label htmlFor={inputId}>{label}
            <select id={inputId} value={value} onChange={handleChange} {...props} required>
                <option value="" disabled>Selecione</option>
                {opts.map((op) => (
                    <option key={op.id} value={op.id}>{op.nome}</option>
                ))}
            </select>
        </label>
    )
}

export default Select