import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import PortfolioReducer from '../reducers/PortfolioReducer';

const initialState = {
  portfolioItems: [],
  error: ''
}

export const PortfolioContext = createContext(initialState);

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PortfolioReducer, initialState);

  async function getPortfolioItems() {
    try {
      const res = await axios.get('https://tommooney.devcamp.space/portfolio/portfolio_items')

      dispatch({
        type: 'GET_PORTFOLIO_ITEMS',
        payload: res.data.portfolio_items
      })
    } catch (err) {
      dispatch({
        type: 'PORTFOLIO_ERROR',
        payload: console.log(err)
      })
    }
  }
  return (
    <PortfolioContext.Provider value={{
      portfolioItems: state.portfolioItems,
      error: state.error,
      getPortfolioItems
    }}>
      {children}
    </PortfolioContext.Provider>
  )
}
