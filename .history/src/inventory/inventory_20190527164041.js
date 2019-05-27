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
        { this.props.prop ? "道具为空" : <img src={heisiyeti} alt=""/>}
      </div>
    );
  }
}

export default Inventory;
