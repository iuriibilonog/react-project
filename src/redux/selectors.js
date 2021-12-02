/* ---- selectors for mapStateToProps only ! ---- */

export const getBalance = state => state.transactions.balance;
export const getIsSystemInitialised = state => state.isSystemStarted;
export const isUserLoggedIn = state => state.auth.isLoggedIn;