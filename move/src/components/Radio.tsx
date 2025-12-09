import React, { forwardRef } from "react";

type RadioProps = {
    legend?: string;
    options: string[];
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ name, options, legend, error, value, onChange, onBlur, ...props }, ref) => {
        return (
            <fieldset className="row">
                <legend>{name}</legend>

                {options.map((op, index) => {
                    const id = `${name}-${op}`;

                    return (
                        <div
                            key={op}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <input
                                type="radio"
                                id={id}
                                name={name}
                                value={op}
                                checked={value === op}
                                onChange={onChange}
                                onBlur={onBlur}
                                ref={ref}
                                {...props}
                            />
                            <label htmlFor={id}>{op}</label>
                        </div>
                    );
                })}

                {error && (
                    <span style={{ color: "red", fontSize: "0.8rem" }}>{error}</span>
                )}
            </fieldset>
        );
    }
);

// Radio.displayName = "Radio";
export default Radio;
