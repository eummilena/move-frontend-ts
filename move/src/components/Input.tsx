import React, { type CSSProperties, forwardRef } from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const Input = ({ id, label, error, ...props }: InputProps) => {
  return (
    <div style={style}>
      <label htmlFor={id}>
        {label}
        <input id={id}  {...props} />
      </label>

      {error && (
        <span style={{ color: 'red', fontSize: '0.8rem' }}>
          {error}
        </span>
      )}
    </div>
  );
};

// Input.displayName = 'Input';

export default Input;
