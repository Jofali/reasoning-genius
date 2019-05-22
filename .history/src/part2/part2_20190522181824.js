import React, { Component } from 'react';

import './part2.css';
import moxiansheng from '../assets/moxiansheng.png';
import neikuge from '../assets/neikuge.png';
import shenmiren from '../assets/shenmiren.png';

class Part2 extends Component {
  constructor(props) {
    super(props);
    this.suspectDialogue = this.suspectDialogue.bind(this);
  }

  suspectDialogue(name) {
    alert(name);
  }

  render() {
    return (
      <div className="part2">
        <div className="part2-person-1">
          <img onClick={() => this.suspectDialogue(1)} src={moxiansheng} alt=""/>
          <img onClick={() => this.suspectDialogue(2)} src={shenmiren} alt=""/>
        </div>
        <div className="part2-person-2">
        <img onClick={() => this.suspectDialogue(3)} src={neikuge} alt=""/>
        </div>
      </div>
    );
  }
}

export default Part2;
