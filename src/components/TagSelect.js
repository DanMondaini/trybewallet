import PropTypes from 'prop-types';
import React from 'react';

class TagSelect extends React.Component {
  render() {
    const { handleChange, tag } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default TagSelect;

// O requisito 4 foi feito com consulta ao repositório do Erickson: https://github.com/tryber/sd-015-b-project-trybewallet/pull/84/commits/db0a39c2c36b8ef0990e620e3c5c0a422bf8ba9c
