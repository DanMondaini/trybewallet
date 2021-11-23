import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { populateCurrenciesAction, fetchExchangeRates } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.createExpense = this.createExpense.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { populateCurrencies, getExchangeRates } = this.props;
    const currenciesObj = await getExchangeRates();
    const currencies = Object.keys(currenciesObj);
    const filteredCurrencies = currencies.filter((currency) => currency !== 'USDT');
    populateCurrencies(filteredCurrencies);
  }

  createExpense() {
    const { expenses } = this.props;
    return expenses.map((expense) => {
      const currencyName = expense.exchangeRates[expense.currency];
      const currency = currencyName.name.replace('/Real Brasileiro', '');
      const convertedValue = parseFloat((currencyName.ask)).toFixed(2);
      const total = parseFloat((expense.value * currencyName.ask)).toFixed(2);
      return (
        <tr key={ expense.id }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{currency}</td>
          <td>{convertedValue}</td>
          <td>{total}</td>
          <td>Real</td>
        </tr>
      );
    });
  }

  render() {
    const { email, totalWalletValue, expenses } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{email}</h3>
          <section>
            <p data-testid="total-field">
              {totalWalletValue || 0}
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </section>
        </header>
        <WalletForm />
        <table>
          <tbody>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            {expenses.length > 0 && this.createExpense()}
          </tbody>
        </table>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getExchangeRates: PropTypes.func.isRequired,
  populateCurrencies: PropTypes.func.isRequired,
  totalWalletValue: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalWalletValue: state.wallet.totalWalletValue,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  populateCurrencies: (currencies) => dispatch(populateCurrenciesAction(currencies)),
  getExchangeRates: () => dispatch(fetchExchangeRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// Consultei o repo do Cláudio Cassimiro para o req 7: https://github.com/tryber/sd-015-b-project-trybewallet/pull/22/commits/2e87cfc4e087e1bd271cb4742f9db9e057c1832a
