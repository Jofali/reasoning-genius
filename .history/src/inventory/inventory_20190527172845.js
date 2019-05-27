import React from 'react';

import './inventory.css';
import heisiyeti from '../assets/heiseyeti.png';
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragStatus: false,
      X: 0,
      Y: 0
    }
    this.startDragDrop = this.startDragDrop.bind(this);
    this.moveDragDrop = this.moveDragDrop.bind(this);
    this.endDragDrop = this.endDragDrop.bind(this);
  }

  startDragDrop() {
    this.setState({
      dragStatus: true
    })
    console.log(1)
  }

  moveDragDrop(event) {
    this.setState({
      X: event.touches[0].clientX,
      Y: event.touches[0].clientY
    })
  }

  endDragDrop() {
    this.setState({
      dragStatus: false
    })
    console.log(2)
  }
    
  render() {
    return (
      <div className="inventory-content-wrap">
        {this.props.prop ? <img onTouchStart={this.startDragDrop} onTouchEnd={this.endDragDrop} onTouchMove={ this.moveDragDrop } src={heisiyeti} alt="" /> : "道具为空"}
        { this.state.dragStatus ? <img src={heisiyeti} alt="" /> : null}
        X: {this.state.X}
        y: {this.state.Y}
      </div>
    );
  }
}

export default Inventory;
