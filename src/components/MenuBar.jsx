import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UilShoppingBag,  } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function MenuBar({openCart, totalItems, user, setUser}) {
  function logout() {
    setUser('');
    localStorage.removeItem("user");
  }


  return (
    <div>
        <Navbar fixed="top" bg="light" expand="lg" style={{
          boxShadow:'0px 0px 5px .75px gray'
        }}>
          <Container>
            <Navbar.Brand as={Link} to="/" ><h1>SPACE-Y</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="px-4" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="px-4" as={Link} to="/products">Products</Nav.Link>
                <NavDropdown title="Learn" className="px-4" id="basic-nav-dropdown">
                  <NavDropdown.Item as={HashLink} to='/learn#service'>
                    Services
                  </NavDropdown.Item>                  
                  <NavDropdown.Item as={HashLink} to='/learn#about'>
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} to='/learn#product'>
                    Our Product
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={HashLink} to='/learn#contact'>
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="px-4" as={Link} to="/orders" hidden={!user}>Orders</Nav.Link>
                

                <Nav.Link className="px-4" as={Link} to="/login" hidden={user}>Log in</Nav.Link>

                
                

                <Nav.Link className="px-4" onClick={openCart}>
                  <div style={{
                    position:'relative'
                  }}>
                    <UilShoppingBag className='fa-'/>
                    <div style={{
                      position:'absolute',
                      bottom:-12,
                      right:-6,
                      fontWeight:'bold'
                    }}>
                      {totalItems === 0 ? "" : totalItems}
                    </div>
                  </div>
                  
                </Nav.Link>

                <button type='button' className='px-4' style={{padding:'0 8px', margin:'0', marginLeft:'20px'}} hidden={!user} onClick={logout}>Log out</button> 

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default MenuBar