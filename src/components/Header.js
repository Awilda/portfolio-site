import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<h1 className="header__title">awilda</h1>
		<div className="header__nav">
			<NavLink className="header__navItems" to="/" activeClassName="is-active" exact={true}>home</NavLink>
			<NavLink className="header__navItems" to="/portfolio" activeClassName="is-active" exact={true}>portfolio</NavLink>
			<NavLink className="header__navItems" to="/contact" activeClassName="is-active">contact</NavLink>
		</div>
	</header>
);

export default Header;