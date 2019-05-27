import React from 'react';

import heisiyeti from '../assets/heiseyeti.png';
import './part1.css';

class Part1 extends React.Component {
  constructor(props) {
    super(props);
    this.showTitle = this.showTitle.bind(this);
  }

  showTitle () {
    this.props.onData({
      status: "clickBlack",
      statusClass: "title"
    });
  }

  render() {
    let img;
    if(!this.props.prop) {
      img = <img src={heisiyeti} alt=""/>
    }
    return (
      <div className="part1">
        <div className="black-juice" onClick={ this.showTitle }>
          { img }
        </div>
      </div>
    );
  }
}

export default Part1;
