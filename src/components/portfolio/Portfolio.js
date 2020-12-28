import React, { useEffect, useContext } from 'react';

import { PortfolioContext } from '../contexts/PortfolioContext';
import PortfolioItem from './PortfolioItem';


export default function Portfolio() {
  const { portfolioItems, getPortfolioItems, error } = useContext(PortfolioContext);

  useEffect(() => {
    getPortfolioItems();
  }, []);

  return (
    <div className='portfolio-items-wrapper'>
      {portfolioItems.map(portfolioItem => (<PortfolioItem key={portfolioItem.id} portfolioItems={portfolioItem} />))}
    </div>
  )
}