import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string;
}

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={label} {...props} />
    </div>
  )
}

export default Input