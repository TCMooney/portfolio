import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioItem(props) {
  const [portfolioItemClass, setPortfolioItemClass] = useState('');

  const { id, name, description, thumb_image_url, logo_url } = props.portfolioItems;

  const handleMouseEnter = () => {
    setPortfolioItemClass('image-blur')
  }

  const handleMouseLeave = () => {
    setPortfolioItemClass('')
  }

  return (
    <Link to={`/portfolio/${id}`}>
      <div className='portfolio-item-wrapper' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        <div className={`portfolio-item-thumb-image ${portfolioItemClass}`} style={{ backgroundImage: `url(${thumb_image_url})` }} />
        <div className='image-text-wrapper'>
          <div className='portfolio-item-name'>
            {name}
          </div>
          <div className='portfolio-item-logo-image'>
            <img src={logo_url} />
            <div className='subtitle'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 