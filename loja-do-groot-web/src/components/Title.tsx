type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => {
  const titleWithBold = title.split('**')
  let titleElement: JSX.Element

  if (titleWithBold.length > 1) {
    titleElement = (
      <h1>
        {titleWithBold[0]}
        <strong>{titleWithBold[1]}</strong>
        {titleWithBold[2]}
      </h1>
    )
  } else {
    titleElement = <h1>{title}</h1>
  }

  return titleElement
}
export default Title
