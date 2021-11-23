// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, UPDATE_TOTAL, POPULATE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  totalWalletValue: 0,
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case UPDATE_TOTAL:
    return {
      ...state,
      totalWalletValue: state.totalWalletValue + action.exchangedValue,
    };
  case POPULATE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};
export default walletReducer;
// O requisito 4 foi feito com consulta ao repositório do Erickson: https://github.com/tryber/sd-015-b-project-trybewallet/pull/84/commits/db0a39c2c36b8ef0990e620e3c5c0a422bf8ba9c
