import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const ProductsListItem = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <span>{props.product.title}</span>
      <Link to={`/products/${props.product.id}`}>View Product</Link>
    </ListGroup.Item>
  )
}

export default ProductsListItem