import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class CurrencySelect extends React.Component {
  createOption(currency) {
    return (
      <option
        key={ currency }
        value={ currency }
        data-testid={ currency }
      >
        { currency }
      </option>
    );
  }

  render() {
    const { handleChange, currency, currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ handleChange }
        >
          {currencies.map((curr) => this.createOption(curr)) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

CurrencySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(CurrencySelect);

// O requisito 4 foi feito com consulta ao repositório do Erickson: https://github.com/tryber/sd-015-b-project-trybewallet/pull/84/commits/db0a39c2c36b8ef0990e620e3c5c0a422bf8ba9c
