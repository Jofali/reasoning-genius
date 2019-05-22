import React from 'react';

import './title.css';
function Title() {
  const jiben = {
    begin:["这个故事是由现实中不会发生的离奇和无聊的故事组成的。", "好孩子们，", "不要轻易模仿吖！"],
    part1: {},
    part2: {},
    end: {
      'f': ["就这样，可怜的头戴内裤的男人因为冤罪被警察带走了。", "Game over."],
      't': ["就这样，真凶被警察带走了。", "Clear."]
    }
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
