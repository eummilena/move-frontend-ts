type TextareaProps = React.ComponentProps<'textarea'> & {
    label: string;
}

const Textarea = ({ label, id, ...props }: TextareaProps) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea id={id}></textarea>
        </div>
    )
}

export default Textarea