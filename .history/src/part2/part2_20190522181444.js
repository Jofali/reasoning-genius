import React, { Component } from 'react';

import './part2.css';
import moxiansheng from '../assets/moxiansheng.png';
import neikuge from '../assets/neikuge.png';
import shenmiren from '../assets/shenmiren.png';

class Part2 extends React.Component {



  return (
    <div className="part2">
      <div className="part2-person-1">
        <img onClick={} src={moxiansheng} alt=""/>
        <img onClick={} src={shenmiren} alt=""/>
      </div>
      <div className="part2-person-2">
      <img onClick={} src={neikuge} alt=""/>
      </div>
    </div>
  );
}

export default Part2;
