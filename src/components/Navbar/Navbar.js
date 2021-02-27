import React from 'react';
import { Link } from 'react-router-dom';
import { 
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
 } from 'react-bootstrap';

const AppNavbar = () => {

	return (
		<Navbar bg="secondary" expand="lg">
		<Navbar.Brand href="#home">Gist-Viewer</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="/" >Home</Nav.Link>
				<Nav.Link as={Link} to="/favorites" >Favorites</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Github username" className="mr-sm-2" />
				<Button variant="outline-success">Search Gists</Button>
			</Form>
		</Navbar.Collapse>
	</Navbar>
	)
}


export default AppNavbar;