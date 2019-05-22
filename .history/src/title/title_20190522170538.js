import React from 'react';

import './title.css';
function Title() {
  const jiben = {
    begin:["这个故事是由现实中不会发生的离奇和无聊的故事组成的。", "好孩子们，", "不要轻易模仿吖！"],
    part1: {},
    part2: {},
    end: {}
  };
  return (
    <div>
      <div className="title">
        <div className="title-content-wrap">
          这就是案发现场吗?
        </div>
      </div>
    </div>
  );
}

export default Title;
