import React from 'react';

import './end.css';
import play from '../play';
function End(props) {
  // eslint-disable-next-line no-unused-vars
  let content = [];
  if(props.name === "neokunan") {
    content = play.end.neiKuNan;
  } else if (props.name === "moxiansheng") {
    content = play.end.moXianSheng;
  } else if(props.name === "shenmiren") {
    content = play.end.shenMiRen;
  } else {
    content = ["出错了", "请反馈一下"];
  }
  console.log(content)
  return (
      <div className="begin">
        <div className="begin-content-wrap">
          <p>{content[0]}</p>
          <p>{content[1]}</p>
        </div>
      </div>
  );
}

export default End;
