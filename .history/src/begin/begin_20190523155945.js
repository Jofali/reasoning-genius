import React from 'react';

import './begin.css';
import play from '../play';
function Title() {
  return (
      <div className="begin">
        <div className="begin-content-wrap">
          { play.begin[0] }
          { play.begin[2] }
        </div>
      </div>
  );
}

export default Title;
