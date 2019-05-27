import React from 'react';

import heisiyeti from '../assets/heiseyeti.png';
import './part1.css';

class Part1 extends React.Component {
  constructor(props) {
    super(props);
    this.showTitle = this.showTitle.bind(this);
  }

  showTitle () {
    console.log(this.props.data)
    this.props.onData(this, true);
  }
  
  render() {
    return (
      <div className="part1">
        <div className="black-juice" onClick={ this.showTitle }>
          <img src={heisiyeti} alt=""/>
        </div>
      </div>
    );
  }
  }


export default Part1;
