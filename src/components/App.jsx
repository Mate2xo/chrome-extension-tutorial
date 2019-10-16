import React from 'react';
import Rule from './Rule';

const data = [
  "regle 1",
  "regle 2",
  "regle 3",
  "regle 3",
  "regle 4",
  "regle 6",
  "regle 7",
  "regle 8",
  "regle 9",
  "regle 10",
  "regle 11",
];

export default function App() {
  const percent = number=> Math.round(number / data.length * 100);

  const [checkedRulesCount, setCheckedRulesCount] = React.useState(0);

  return (
    <>
      <h1>Ze Rulz {percent(checkedRulesCount)}%</h1>
      <ul>
        {data.map( (rule, i) => (
          <Rule text={rule}
                key={i}
                checkedRulesCount={checkedRulesCount}
                setCheckedRulesCount={setCheckedRulesCount} />
          ))
        }
      </ul>
    </> 
  )
};