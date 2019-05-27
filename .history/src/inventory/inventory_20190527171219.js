import React from 'react';

import './inventory.css';
import heisiyeti from '../assets/heiseyeti.png';
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  startDragDrop() {
    console.log(1)
  }
  endDragDrop() {
    console.log(1)
  }
    
  render() {
    return (
      <div className="inventory-content-wrap">
        {this.props.prop ? <img onTouchStart={this.startDragDrop} onTouchEnd={this.endDragDrop} src={heisiyeti} alt=""/> : "道具为空"}
      </div>
    );
  }
}

export default Inventory;
