import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioPageMerritt from './PortfolioPageMerritt';
import PortfolioPageSmacna from './PortfolioPageSmacna';
import PortfolioPageBuildsBio from './PortfolioPageBuildsBio';
import PortfolioPageAOA from './PortfolioPageAOA';
import PortfolioPageIndecision from './PortfolioPageIndecision';

const PortfolioItemPage = (props) => {
	return (
		<div className="portfolioItemPage">
			{(function() {
	        	switch (props.match.params.id) {
	        		case 'merritt':
	            		return <PortfolioPageMerritt />;
	            	case 'smacna':
	            		return <PortfolioPageSmacna />;
	            	case 'buildsbio':
	            		return <PortfolioPageBuildsBio />;
	            	case 'aoa':
	            		return <PortfolioPageAOA />;
	            	case 'indecision':
	            		return <PortfolioPageIndecision />;
	          	default:
	            		return <p>Default case</p>;
	        	}
	      	})()}
		</div>
	);
};

export default PortfolioItemPage;