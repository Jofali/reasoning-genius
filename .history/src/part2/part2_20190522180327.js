import React from 'react';

import './part2.css';
import moxiansheng from '../assets/moxiansheng.png';
import neikuge from '../assets/neikuge.png';
import shenmiren from '../assets/shenmiren.png';

function Part2() {
  return (
    <div className="part2">
      <img src={moxiansheng} alt=""/>
      <img src={shenmiren} alt=""/>
      <img src={neikuge} alt=""/>
    </div>
  );
}

export default Part2;
