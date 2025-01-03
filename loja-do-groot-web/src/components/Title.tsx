import '../styles/Title.css'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  const titleWithBold = title.split('**')
  let titleElement: JSX.Element

  if (titleWithBold.length === 1) {
    titleElement = <h2>{title}</h2>
  } else {
    titleElement = (
      <h1>
        {titleWithBold.map((text, index) => {
          if (index % 2 === 0) {
            return text
          } else {
            return <strong key={index}>{text}</strong>
          }
        })}
      </h1>
    )
  }

  return <div className='title'>{titleElement}</div>
}
export default Title
