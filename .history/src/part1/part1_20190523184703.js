import React from 'react';

import heisiyeti from '../assets/heiseyeti.png';
import './part1.css';

class Part1 extends React.Component {
  constructor(props) {
    super(props);
    this.showTitle = this.showTitle.bind(this);
    this.getPropStatus = this.getPropStatus.bind(this);
  }

  showTitle () {
    this.props.onData({
      status: "clickBlack",
      statusClass: "title"
    });
  }

  getPropStatus(status) {
    let propStatus = "";
    if(status) {
      propStatus = "hide";
    }
  }

  render() {
    let propStatus = this.getPropStatus(this.props.prop);
    return (
      <div className="part1">
        <div className="black-juice" onClick={ this.showTitle }>
          <img className={propStatus} src={heisiyeti} alt=""/>
        </div>
      </div>
    );
  }
}

export default Part1;
