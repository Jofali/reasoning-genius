import React from 'react';

import './part2.css';
import moxiansheng from '../assets/moxiansheng.png';
import neikuge from '../assets/neikuge.png';
import shenmiren from '../assets/shenmiren.png';

function Part2() {
  return (
    <div className="part2">
      <div className="part2-person-1">
        <img src={moxiansheng} alt=""/>
        <img src={shenmiren} alt=""/>
      </div>
      <div className="part2-person-2">
      <img src={neikuge} alt=""/>
      </div>
    </div>
  );
}

export default Part2;
