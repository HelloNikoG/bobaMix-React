import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function NavComponent() {
	const navStyle = {
		color: 'black',
	};
	return (
		<div>
			<Navbar
				className="
                border-right-0 
                border-left-0 
                border-top-0 
                border-bottom 
                border-dark"
			>
				<NavbarBrand className="mr-auto ml-2 mb-4">
					<img src="/assets/logo.png" width="100" height="100" />
				</NavbarBrand>
				<Nav className="mr-auto">
					<NavItem>
						<Link to="/order">
							<NavLink style={navStyle}>Order</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/whatisboba">
							<NavLink style={navStyle}>What is Boba?</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/contactus">
							<NavLink style={navStyle}>Contact Us</NavLink>
						</Link>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavComponent;
