import { useParams, useOutletContext } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const params = useParams()
  const [products] = useOutletContext()
  const [selected, setSelected] = useState({})

  useEffect(() => {
    const filteredProduct = products.filter(product => product.id == params.productId)
    setSelected(filteredProduct[0])
  }, [params, products])

  return (
    <Card style={{ width: 500 }}>
      {selected?.images?.length > 0 && (
        <Card.Img variant="top" src={selected?.images[0]} />
      )}
      <Card.Body>
        <Card.Title>{selected?.title}</Card.Title>
        <Card.Text>{selected?.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <p>{selected?.price}</p>
      </Card.Footer>
    </Card>
  )
}

export default ProductDetail