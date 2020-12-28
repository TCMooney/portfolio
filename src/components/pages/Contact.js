import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div className='right-column'>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='phone' />
            </div>
            <div className='text'>
              (631)997-8212
                        </div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='envelope' />
            </div>
            <div className='text'>
              tcmooney88@gmail.com
                        </div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='map-marker-alt' />
            </div>
            <div className='text'>
              Hanover, PA
            </div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='code-branch' />
            </div>
            <div className='text'>
              <a className='github-link' href='https://github.com/TCMooney'>
                Github
                            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}