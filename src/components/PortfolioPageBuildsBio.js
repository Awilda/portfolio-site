import React from 'react';
import BuildsBio from './PortfolioPageBuildsBio';

const ProfilePageBuildsBio = () => (
	<div className="portfolioPage">
		<div className="portfolioPage__image">
			<img src="../../../images/buildsbio.png" />
		</div>
		<div className="portfolioPage__info">
			<h1 className="portfolioPage__name">Builds Bio+</h1>
			<p className="portfolioPage__description">A multi-level website built on WordPress using PHP, jQuery and Less.<br />
			<br />
			<a href="https://www.nycbuildsbio.org" target="_blank">www.nycbuildsbio.org</a>
			</p>
		</div>
	</div>
);

export default ProfilePageBuildsBio;