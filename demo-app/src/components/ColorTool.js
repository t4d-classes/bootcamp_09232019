import React from 'react';

export const ColorTool = (props) => {

  // props is frozen
  // props.newProp = 'This is fun!';
  // props.colors = [];
  // console.log(Object.isFrozen(props));


  // what would happen to you?
  // props.colors.push('orange');

  const newColors = props.colors.sort();

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {newColors.map((color, index) =>
        <li key={index}>
          {color}
        </li>)}
    </ul>
  </>;

};