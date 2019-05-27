import React from 'react';

import './title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topicNum: 0
    }
    this.nextTopic = this.nextTopic.bind(this);
  }
  nextTopic (num) {
    
    if(num === 6) {
      this.props.onData({
        status: false,
        statusClass: "title hide"
      });
      return;
    }
    this.setState({
      topicNum: num + 1
    });

    this.props.onData({
      status: false,
      statusClass: "title hide"
    });

  }

  render() {
    return (
      <div>
        <div className={ this.props.data.statusClass } onClick={ () => this.nextTopic(this.state.topicNum) }>
          <div className="title-content-wrap">
            { this.props.data.status }
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
