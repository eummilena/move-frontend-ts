import type { ComponentProps } from "react";


type IDateInput = ComponentProps<'input'> & {
    label: string;
}

const InputDate = ({ label, id, ...props }: IDateInput) => {

    const inputId = label.replaceAll(' ', '-').toLowerCase();

    return (
        <div>
            <div>
                <label htmlFor={inputId}>{label}</label>
                <input type='date' id={inputId} name={inputId} required {...props} />
            </div>
        </div>
    )
}

export default InputDate