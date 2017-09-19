import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 
'react-bootstrap';

	class NavBarHeader extends Component {
		render() {
			return (
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">React-Bootstrap</a>
						</Navbar.Brand>
					</Navbar.Header>
					<nav>
						<NavItem eventKey={1} href="#">Link</NavItem>
						<NavItem eventKey={2} href="#"
					</nav>

	export default NavBarHeader;