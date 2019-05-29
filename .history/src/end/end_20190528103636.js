import React from 'react';

import './end.css';
import play from '../play';
function End() {
  return (
      <div className="begin">
        <div className="begin-content-wrap">
          <p>{ play.begin[0] }</p>
          <p>{ play.begin[1] }</p>
        </div>
      </div>
  );
}

export default End;
