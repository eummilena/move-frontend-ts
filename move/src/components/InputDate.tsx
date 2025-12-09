import { type ComponentProps } from "react";

type IDateInput = ComponentProps<"input"> & {
    label: string;
    error?: string;
};

const InputDate = ({ label, id, error, ...props }: IDateInput) => {
    const inputId = id || label.replaceAll(" ", "-").toLowerCase() || "date-input";

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={inputId}>{label}</label>

            <input
                type="date"
                id={inputId}
                {...props}
            />

            {error && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                    {error}
                </span>
            )}
        </div>
    );
}


// InputDate.displayName = "InputDate";
export default InputDate;
