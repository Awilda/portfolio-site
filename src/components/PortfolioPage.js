import React from 'react';
import { Link } from 'react-router-dom';
import { Merritt, Smacna, BuildsBio, AOA, Indecision } from './../portfolioImports/portfolioPages.js';


const PortfolioPage = () => {
	return (
		<div className="portfolio">
			<h1 className="portfolio__title">work &amp; projects</h1>
				<div className="portfolio__itemsContainer">
				<div className="portfolio__itemLinkContainer">
					<Link className="portfolio__item" to="/portfolio/merritt">
						<img src={Merritt} />
						<p>Merritt</p>
					</Link>
				</div>
				<div className="portfolio__itemLinkContainer">
					<Link className="portfolio__item" to="/portfolio/smacna">
						<img src={Smacna} />
						<p>SMACNA</p>
					</Link>
				</div>
				<div className="portfolio__itemLinkContainer">
					<Link className="portfolio__item" to="/portfolio/buildsbio">
						<img src={BuildsBio} />
						<p>Builds Bio+</p>
					</Link>
				</div>
				<div className="portfolio__itemLinkContainer">
					<Link className="portfolio__item" to="/portfolio/aoa">
						<img src={AOA} />
						<p>AOA</p>
					</Link>
				</div>
				<div className="portfolio__itemLinkContainer">
					<Link className="portfolio__item" to="/portfolio/indecision">
						<img src={Indecision} />
						<p>Indecision App</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioPage;