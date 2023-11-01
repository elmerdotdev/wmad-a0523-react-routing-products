import { useOutletContext } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

import ProductsListItem from './ProductsListItem'

const ProductsList = () => {
  const [products] = useOutletContext()

  return (
    <ListGroup>
      {products.map((product, index) => (
        <ProductsListItem key={index} product={product} />
      ))}
    </ListGroup>
  )
}

export default ProductsList