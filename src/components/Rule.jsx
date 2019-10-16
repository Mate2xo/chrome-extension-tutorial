import React from 'react';
import PropTypes from 'prop-types';

export default function Rule({checkedRulesCount, setCheckedRulesCount, text, i}) {

  const actOnClick = e => {
    const new_value = checkedRulesCount + (e.currentTarget.checked ? 1 : -1);
    console.log(new_value);
    setCheckedRulesCount(new_value);
  }

  return (
    <li key={i}>
      <input type="checkbox" onClick={actOnClick}/>{text}
    </li>
  )
};

Rule.propTypes = {
  checkedRulesCount: PropTypes.number.isRequired,
  setCheckedRulesCount: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
