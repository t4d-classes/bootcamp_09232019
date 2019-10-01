import React, { useState, useEffect } from 'react';

export const CalcTool = ({
  result, history,
  addCount, subtractCount,
  multiplyCount, divideCount,
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide,
  onClear: clear,
  onDeleteHistoryItem: deleteHistoryItem,
  onRefreshHistory: refreshHistory,
}) => {

  const [ input, setInput ] = useState(0);

  useEffect(() => {

    refreshHistory();

  }, [ refreshHistory ]);

  return <form>
    <div>Result: {result}</div>
    <div>Input: <input type="number" name="input" value={input}
      onChange={(e) => setInput(Number(e.target.value))} /></div>

    <button type="button" onClick={() => add(input)}>+</button>
    <button type="button" onClick={() => subtract(input)}>-</button>
    <button type="button" onClick={() => multiply(input)}>*</button>
    <button type="button" onClick={() => divide(input)}>/</button>
    <button type="button" onClick={() => clear()}>Clear</button>

    <ul>
      {history.map((h, i) => (
        <li key={i}>
          {h.opName} {h.opValue}
          <button type="button" onClick={() => deleteHistoryItem(h.id)}>X</button>
        </li>
      ))}
    </ul>

    <table>
      <thead>
        <tr>
          <th>Add</th>
          <th>Subtract</th>
          <th>Multiply</th>
          <th>Divide</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{addCount}</td>
          <td>{subtractCount}</td>
          <td>{multiplyCount}</td>
          <td>{divideCount}</td>
        </tr>
      </tbody>
    </table>
  </form>
};