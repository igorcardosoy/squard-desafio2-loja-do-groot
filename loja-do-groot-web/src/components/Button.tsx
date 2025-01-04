import '../styles/Button.css'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return <button className='button'>{text}</button>
}

export default Button
