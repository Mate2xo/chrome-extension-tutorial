import React from "react";
import PropTypes from "prop-types";

export default function Rule({ checkedRules, setCheckedRules, rule }) {
  const checked = checkedRules.includes(rule.id);

  const prepareUpdatedRules = ruleId => {
    if (checked) return checkedRules.filter(id => id !== ruleId);
    else return [ruleId, ...checkedRules];
  };

  const storeRuleChange = e => {
    e.preventDefault;
    const newRules = prepareUpdatedRules(rule.id);
    setCheckedRules(newRules);

    const rulesToStore = {};
    rulesToStore[window.location.host] = newRules;
    chrome.storage.sync.set(rulesToStore);
  };

  return (
    <li>
      <input type="checkbox" onClick={storeRuleChange} checked={checked} />
      {rule.text}
    </li>
  );
}

Rule.propTypes = {
  checkedRules: PropTypes.array.isRequired,
  setCheckedRules: PropTypes.func.isRequired,
  rule: PropTypes.any.isRequired
};
