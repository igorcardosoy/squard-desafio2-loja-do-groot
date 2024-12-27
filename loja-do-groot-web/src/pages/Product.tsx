import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams<{ id: string }>()

  return <div>Product {id}</div>
}
export default Product
