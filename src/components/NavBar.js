import React, { useState } from 'react'
import {  Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = ({ filterbySearch }) => {
  const [searchValue, setsearchValue] = useState('')
  const onSearch = (e) =>{
    e.preventDefault();
    filterbySearch(searchValue)
    setsearchValue('')
  }
  return (
    <Row>
    <Navbar bg="dark" expand="lg" variant='dark' >
    <Container >
      <Navbar.Brand href="#"><div className='brand-color'>MY-FOOD</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            onChange={(e)=> setsearchValue(e.target.value)}
            value={searchValue}
            />
          <button onClick={onSearch} className='btn-search'>Search</button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
    </Row>
  )
}

export default NavBar
