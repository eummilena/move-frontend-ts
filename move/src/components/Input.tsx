import React, { type CSSProperties } from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string;
}

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

const Input = ({ id, label, ...props }: InputProps) => {

  return (
    <div style={style}>
      <label htmlFor={id}>{label}
        <input id={id} name={id} {...props} />
      </label>
    </div>
  )
}

export default Input