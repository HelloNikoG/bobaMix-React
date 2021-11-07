import React from 'react';
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
	NavbarToggler,
	Fade,
	Collapse,
	Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function NavComponent() {
	const navStyle = {
		color: '#fff',
	};
	return (
		<div>
			<Navbar color="dark" className="border-bottom border-dark">
				<NavbarBrand className="m-0 p-0 mr-auto">
					<img src="/assets/logo.png" width="75" height="75" />
				</NavbarBrand>

				<Nav className="mt-0 mb-0 p-0">
					<NavItem className="nav">
						<Link to="/order">
							<NavLink style={navStyle}>Order</NavLink>
						</Link>
					</NavItem>
					<NavItem className="nav">
						<Link to="/whatisboba">
							<NavLink style={navStyle}>What is Boba?</NavLink>
						</Link>
					</NavItem>
					<NavItem className="nav">
						<Link to="/contactus">
							<NavLink style={navStyle}>Contact Us</NavLink>
						</Link>
					</NavItem>
				</Nav>
			</Navbar>

			{/* <Navbar light className="border-bottom border-dark">
				<NavbarBrand className="mr-auto" href="/">
					<img src="/assets/logo.png" width="100" height="100" />
				</NavbarBrand>
				<NavbarToggler className="mr-2" />
				<Collapse navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar> */}
		</div>
	);
}

export default NavComponent;
