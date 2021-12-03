/* ---- selectors for mapStateToProps only ! ---- */

export const getBalance = state => state.transactions.balance;
export const getUserBalance = state => state.auth.userBalance;
export const getIsSystemInitialised = state => state.isSystemStarted;

export const isUserLoggedIn = state => state.auth.isLoggedIn;

export const getMonthStats = state => state.transactions.transactions.getMonth;
