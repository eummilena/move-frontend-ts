import React, { forwardRef } from "react";

type OptionObj = { id: string; nome: string };

type SelectProps = React.ComponentProps<"select"> & {
    label: string;
    options: Array<string | OptionObj>;
    error?: string;
};

const sanitize = (s: string) =>
    String(s).toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const Select = ({ id, label, options, error, value, onChange, onBlur, ...props }: SelectProps) => {
    const inputId = id ?? `select-${sanitize(label)}`;

    // normaliza array de opções
    const opts = Array.isArray(options)
        ? options.map((o) =>
            typeof o === "string" ? { id: sanitize(o), nome: o } : o
        )
        : [];

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={inputId}>{label}</label>

            <select
                id={inputId}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            >
                <option value="">Selecione</option>

                {opts.map((op) => (
                    <option key={op.id} value={op.id}>
                        {op.nome}
                    </option>
                ))}
            </select>

            {error && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>{error}</span>
            )}
        </div>
    );
}


// Select.displayName = "Select";
export default Select;
