// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const POPULATE_CURRENCIES = 'POPULATE_CURRENCIES';

export const loginAction = (email) => ({
  type: USER_LOGIN,
  email,
});

export const addExpenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const updateTotalAction = (exchangedValue) => ({
  type: UPDATE_TOTAL,
  exchangedValue,
});

export const populateCurrenciesAction = (currencies) => ({
  type: POPULATE_CURRENCIES,
  currencies,
});

export function fetchExchangeRates() {
  return async () => {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const reponse = await data.json();
    return reponse;
  };
}
