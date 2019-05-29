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
    });
  }

  moveDragDrop(event) {
    this.setState({
      X: event.touches[0].clientX - 25,
      Y: event.touches[0].clientY - 30
    });
  }

  endDragDrop() {
    if(this.props.part) {
      // moxiansheng
      if(this.state.Y < window.innerHeight/2 && this.state.X < window.innerWidth/2) {
        if(this.props.status.moxianshen){
          alert("momomo")
        }
        
      }
      // shenmiren
      if(this.state.Y < window.innerHeight/2 && this.state.X > window.innerWidth/2) {
        if(this.props.status.shenmiren){
          alert("shenmiren")
        }
        
      }
      //neikunan
      if(this.state.Y > window.innerHeight/2 && this.state.X < window.innerWidth * 0.75 && this.state.X > window.innerWidth * 0.25 ) {
        if(this.props.status.neikunan){
          alert("neikunan")
        }
        
      }
    }
    this.setState({
      dragStatus: false
    });
  }
    
  render() {
    return (
      <div className="inventory-content-wrap">
        {this.props.prop ? <img onTouchStart={this.startDragDrop} onTouchEnd={this.endDragDrop} onTouchMove={ this.moveDragDrop } src={heisiyeti} alt="" /> : "道具为空"}
        {this.state.dragStatus ? <img className="drag-drop-el" style={{left: this.state.X + 'px', top: this.state.Y + 'px'}} src={heisiyeti} alt="" /> : null}
      </div>
    );
  }
}

export default Inventory;
