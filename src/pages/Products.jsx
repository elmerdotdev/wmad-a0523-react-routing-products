import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setProducts(data.products)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Row>
        <Col>
          <h1>Products</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati nihil laborum aspernatur, enim similique sint provident sunt aliquam amet itaque beatae quam! Quis, placeat tempora ipsum adipisci ea autem!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet context={[products]} />
        </Col>
      </Row>
    </>
  )
}

export default Products