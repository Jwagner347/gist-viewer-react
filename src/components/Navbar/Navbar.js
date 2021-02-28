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
	const textInput = React.createRef();
	const url = 'http://localhost:3000/local/graphql';

	const getGists = (username) => {
		const query = `
		{
			getUserGists(username: "${username}") {
				gists {
						url
				}
			}
		}
	`;

		return fetch(url, { 
			method: 'POST',
			headers: {'Content-Type': 'application/graphql'},
			body: JSON.stringify({ query })
		})
		.then((res) => res.json())
		.then(data => console.log('data', data));
	}

	const submitHandler = (event) => {
		event.preventDefault();
		getGists(textInput.current.value);
	};

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
				<FormControl type="text" ref={textInput} placeholder="Github username" className="mr-sm-2" />
				<Button onClick={submitHandler} variant="outline-success">Search Gists</Button>
			</Form>
		</Navbar.Collapse>
	</Navbar>
	)
}


export default AppNavbar;