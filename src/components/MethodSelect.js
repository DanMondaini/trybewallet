import PropTypes from 'prop-types';
import React from 'react';

class MethodSelect extends React.Component {
  render() {
    const { handleChange, method } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          data-testid="method-input"
          value={ method }
          onChange={ handleChange }
        >
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </label>
    );
  }
}

MethodSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default MethodSelect;

// O requisito 4 foi feito com consulta ao repositório do Erickson: https://github.com/tryber/sd-015-b-project-trybewallet/pull/84/commits/db0a39c2c36b8ef0990e620e3c5c0a422bf8ba9c
