import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div className="notFoundPage">
		<h1 className="notFoundPage__errorCode">404</h1>
		<Link className="notFoundPage__redirectMessage" to="/">visit the homepage here!</Link>
	</div>
);

export default NotFoundPage;