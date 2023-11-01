import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Products from './pages/Products'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <Container>
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<h1>Home</h1>} />
        <Route path="products" element={<Products />}>
          <Route index element={<ProductsList />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
    </Container>
  )
}

export default App