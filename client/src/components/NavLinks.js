import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserDetails } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../Styles/Images/mainLogo.jpg'
import abc from '../Styles/Images/abc.png'

function NavLinks() {

  const { user, setUser } = UserDetails();
  const navigate = useNavigate();
  // console.log(user)

  const logoutAction = async (e) => {
    e.preventDefault();

    if (window.confirm("Confirm Log out ? ") === true) {
      localStorage.removeItem('user');
      localStorage.removeItem('Role');
      setUser({})
      navigate('/')
      window.location.reload();
    }

  }

  const auth = localStorage.getItem('user')
  const role = localStorage.getItem('Role')


  const [search, setSearch] = useState("");
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" font="Italina"><img src={abc} alt="" width="150px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Admin">Manage Student Profile</Nav.Link>
            <Form className="d-flex" style={{ marginLeft: 100 }}>
              <Form.Control
                type="search"
                value={search}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => { setSearch(e.target.value) }}
              />
              <Button variant="outline-success">Search</Button>
              {auth ? (<Button className='btn btn-danger' onClick={logoutAction} style={{ marginLeft: 10 }}>Logout</Button>) : (<>
                <Nav.Link href="/Login" className='btn btn-success' style={{ marginLeft: 20, color: "white", fontWeight: '600' }}>Login/Register</Nav.Link>
              </>)}

            </Form>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );



}

export default NavLinks;