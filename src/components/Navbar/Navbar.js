import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
	let history = useHistory();

	const getGists = (username) => {
		const query = `
		{
			getUserGists(username: "${username}") {
				gists {
					id
					description
					created_at
					files {
						filename
					}
					html_url
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
		.then((res) => res.json());
	}

	const submitHandler = (event) => {
		event.preventDefault();

		getGists(textInput.current.value)
			.then((res) => {
				history.push({
					pathname: "/search-results",
					state: { data: res.data.getUserGists }
				});
			});

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