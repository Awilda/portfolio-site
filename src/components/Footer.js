import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";  // Font Awesome
import { Link } from 'react-router-dom';

const Footer = () => (
	<div className="footer">
		<p className="footer__text">Made with &#9829; by me!</p>
		<div className="footer__icons">
			<a href="http://github.com/awilda" target="_blank"><FaGithub /></a>
			<a href="https://www.linkedin.com/in/awildacouverthier/" target="_blank"><FaLinkedin /></a>
		</div>
	</div>
);

export default Footer;