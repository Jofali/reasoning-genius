import React, { Component } from 'react';

import './part2.css';
import moxiansheng from '../assets/moxiansheng.png';
import neikuge from '../assets/neikuge.png';
import shenmiren from '../assets/shenmiren.png';

class Part2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smn: {
        name: "神秘的男人"
      },
      mxs: {
        name: "墨先生"
      },
      tdnked: {
        name: "头戴内裤的男人"
      }
    }
    this.suspectDialogue = this.suspectDialogue.bind(this);
  }

  suspectDialogue(name) {
    this.props.onData({
      status: name,
      statusClass: "title"
    });
  }

  render() {
    return (
      <div className="part2">
        <div className="part2-person-1">
          <img onClick={() => this.suspectDialogue("talkToSuspectMoXianSheng")} src={moxiansheng} alt=""/>
          <img onClick={() => this.suspectDialogue("talkToSuspectShenMiRen")} src={shenmiren} alt=""/>
        </div>
        <div className="part2-person-2">
        <img onClick={() => this.suspectDialogue("talkToSuspectNeiKuNan")} src={neikuge} alt=""/>
        </div>
      </div>
    );
  }
}

export default Part2;
