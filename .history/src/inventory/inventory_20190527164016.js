import React from 'react';

import './inventory.css';
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="inventory-content-wrap">
        { this.props.prop ? "道具为空" : }
      </div>
    );
  }
}

export default Inventory;
