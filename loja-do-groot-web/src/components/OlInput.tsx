import { forwardRef, Ref } from 'react'

interface InputProps {
  label: string
  name: string
  id?: string
  type?: string
  value?: string
  className?: string
  isTextArea?: boolean
}

const Inpsut = forwardRef((props: InputProps, ref) => {
  const {
    label,
    name,
    id,
    type = 'text',
    value = '',
    className = '',
    isTextArea = false,
  } = props
  return (
    <div className={`input-group ${className}`}>
      {type !== 'radio' && <label htmlFor={id || name}>{label}</label>}
      {isTextArea ? (
        <textarea
          id={id || name}
          ref={ref as Ref<HTMLTextAreaElement>}
          required
        />
      ) : (
        <input
          id={id || name}
          type={type}
          {...(value && { value })}
          readOnly={type === 'radio'}
          ref={ref as Ref<HTMLInputElement>}
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
})

export default Inpsut
