export default (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      const { user } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated: 'AUTHENTICATED'
      }
    default: return state
  }
}