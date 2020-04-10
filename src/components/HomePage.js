import React from 'react';
import ProfilePic from '../../public/images/profilePic.png';

const HomePage = () => (
	<div className="homepage">
		<h1 className="homepage__title">hello!</h1>
		<div className="homepage__imageContainer">
			<img src={ProfilePic} />
		</div>
		<p className="homepage__text">My name is Awilda and I'm a NYC based front-end web developer specializing in creating dynamic and responsive web pages. I started building websites 5 years ago and have enjoyed immersing myself in the world of code, helping clients solve real world problems, and learning from fellow programmers.</p>
	</div>
);

export default HomePage;