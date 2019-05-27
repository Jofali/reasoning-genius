import React from 'react';

import './title.css';

import play from '../play';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topicNum: 0,
      word: play.part1.one[0]
    }
    this.nextTopic = this.nextTopic.bind(this);
  }
  nextTopic (num) {
    if(num === 6) {
      this.props.onData({statusClass: "title hide"});
      return;
    }
    this.setState({
      topicNum: num + 1,
      word: play.part1.one[num + 1]
    });
  }

  render() {
    return (
      <div>
        <div className={ this.props.data.statusClass } onClick={ () => this.nextTopic(this.state.topicNum) }>
          <div className="title-content-wrap">
            { this.state.word }
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
