import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter =() => (
	<BrowserRouter>
		<div className="pageContainer">
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/portfolio" component={PortfolioPage} exact={true} />
				<Route path="/portfolio/:id" component={PortfolioItemPage} />
				<Route path="/contact" component={ContactPage} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default AppRouter;