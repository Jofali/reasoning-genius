import React from 'react';

import './inventory.css';
import heisiyeti from '../assets/heiseyeti.png';
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="inventory-content-wrap">
        {this.props.prop ? <img onTouchStart={() => {console.log(1)}} onTouchEnd={() => {console.log(2)}} src={heisiyeti} alt=""/> : "道具为空"}
      </div>
    );
  }
}

export default Inventory;
