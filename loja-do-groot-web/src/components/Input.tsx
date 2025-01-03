import React from 'react'

interface InputProps {
  label: string
  name: string
  id?: string
  type?: string
  value?: string
  className?: string
  isTextArea?: boolean
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      id,
      label,
      name,
      type = 'text',
      className,
      value,
      isTextArea,
    }: InputProps,
    ref
  ) => {
    return (
      <div className={`input-group ${className}`}>
        {type !== 'radio' && <label htmlFor={id || name}>{label}</label>}
        {isTextArea ? (
          <textarea
            id={id || name}
            name={name}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            required
          />
        ) : (
          <input
            id={id || name}
            name={name}
            type={type}
            value={value}
            ref={ref as React.Ref<HTMLInputElement>}
            required
          />
        )}
        {type === 'radio' && (
          <label className='plantLabel' htmlFor={id || name}>
            {label}
          </label>
        )}
      </div>
    )
  }
)

export default Input
