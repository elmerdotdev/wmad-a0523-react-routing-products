import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <header>
      <Nav>
        <Nav.Item>
          <NavLink to="/">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/products">Products</NavLink>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header