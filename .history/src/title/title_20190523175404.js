import React from 'react';

import './title.css';
import play from '../play';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topicNum: 0,
      word: play.begin,
    }

    // eslint-disable-next-line default-case
    switch(props.data.status)
    {
      case "begin":
        this.setState({ word: play.begin[0] });
        break;
      case "part1":
        this.setState({ word: play.part1.one[0] });
        break;
      case "clickBlack":
        this.setState({ word: play.part1.clickBlack[0] });
        break;
      case "talkToSuspectNeiKuNan":
        this.setState({ word: play.part1.one[0] });
        break;
      case "talkToSuspectMoXianSheng":
        this.setState({ word: play.part1.one[0] });
        break;
      case "talkToSuspectShenMiRen":
        this.setState({ word: play.part1.one[0] });
        break;
      case "identifySuspectNeiKuNan":
        this.setState({ word: play.part1.one[0] });
        break;
      case "identifySuspectMoXianSheng":
        this.setState({ word: play.part1.one[0] });
        break;
      case "identifySuspectShenMiRen":
        this.setState({ word: play.part1.one[0] });
        break;
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
