import React from 'react';

import './begin.css';
import play from '../play';
function Title() {
  return (
      <div className="begin">
        <div className="begin-content-wrap">
          <p>{ play.begin[0] }</p>
          <p>{ play.begin[1] }</p>
        </div>
      </div>
  );
}

export default Title;
