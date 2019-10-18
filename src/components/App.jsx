import React from "react";
import Rule from "./Rule";

const data = [
  { id: "1", text: "regle 1" },
  { id: "2", text: "regle 2" },
  { id: "3", text: "regle 3" },
  { id: "4", text: "regle 4" },
  { id: "5", text: "regle 5" },
  { id: "6", text: "regle 6" },
  { id: "7", text: "regle 7" },
  { id: "8", text: "regle 8" },
  { id: "9", text: "regle 9" },
  { id: "10", text: "regle 10" },
  { id: "11", text: "regle 11" }
];

export default function App() {
  const percentage = (number, by) => Math.round((number / by) * 100);
  const [checkedRules, setCheckedRules] = React.useState([]);

  React.useEffect(() => {
    const key = window.location.host;
    chrome.storage.sync.get([key], result => {
      const value = result[key] || [];
      setCheckedRules(value);
    });
  }, []);

  return (
    <>
      <h1>Ze Rulz {percentage(checkedRules.length, data.length)}%</h1>
      <ul>
        {data.map(rule => (
          <Rule
            rule={rule}
            key={rule.id}
            checkedRules={checkedRules}
            setCheckedRules={setCheckedRules}
          />
        ))}
      </ul>
    </>
  );
}
