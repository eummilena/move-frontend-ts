
type TextareaProps = React.ComponentProps<"textarea"> & {
    label: string;
    error?: string;
};

const Textarea = ({ label, id, error, ...props }: TextareaProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={id}>{label}</label>

            <textarea id={id} {...props}></textarea>

            {error && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                    {error}
                </span>
            )}
        </div>
    );
}


// Textarea.displayName = 'Textarea';
export default Textarea;
