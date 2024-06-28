import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8eSWn6fnuBkBzWYH419x-Fz_KpmTBtsYQQ&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            e-Cart
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
