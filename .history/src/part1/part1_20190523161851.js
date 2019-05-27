import React from 'react';

import heisiyeti from '../assets/heiseyeti.png';
import './part1.css';

function Part1(props) {
  function showTitle () {
    props.onData(true);
  }
  return (
    <div className="part1">
      <div className="black-juice" onClick={ showTitle }>
        <img src={heisiyeti} alt=""/>
      </div>
    </div>
  );
}

export default Part1;
