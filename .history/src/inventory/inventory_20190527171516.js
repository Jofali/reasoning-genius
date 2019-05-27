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

  moveDragDrop() {
    console.log(3)
  }

  endDragDrop() {
    console.log(2)
  }
    
  render() {
    return (
      <div className="inventory-content-wrap">
        {this.props.prop ? <img onTouchStart={this.startDragDrop} onTouchEnd={this.endDragDrop} onTouchMove={ this.moveDragDrop } src={heisiyeti} alt="" /> : "道具为空"}
        { this.state.dragStatus ? <img src={heisiyeti} alt="" /> : null}
      </div>
    );
  }
}

export default Inventory;
