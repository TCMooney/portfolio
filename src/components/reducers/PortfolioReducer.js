export default (state, action) => {
  switch (action.type) {
    case 'GET_PORTFOLIO_ITEMS':
      return {
        ...state,
        portfolioItems: action.payload
      }
    case 'PORTFOLIO_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}