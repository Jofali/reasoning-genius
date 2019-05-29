import React from 'react';

import './title.css';
import play from '../play';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topicNum: 0,
      word: null,
    }

    this.nextTopic = this.nextTopic.bind(this);
  }

  getWord(status) {
    switch(status)
    {
      case "begin":
        this.setState({word: play.begin});
        break;
      case "part1":
        this.setState({word: play.part1.one});
        break;
      case "clickBlack":
        this.setState({word: play.part1.clickBlack});
        break;
      case "talkToSuspectNeiKuNan":
        this.setState({word: play.part2.talkToSuspect.neiKuNan});
        break;
      case "talkToSuspectMoXianSheng":
        this.setState({word: play.part2.talkToSuspect.moXianSheng});
        break;
      case "talkToSuspectShenMiRen":
        this.setState({word: play.part2.talkToSuspect.shenMiRen});
        break;
      case "identifySuspectNeiKuNan":
        this.setState({word: play.part2.identifySuspect.neiKuNan.talk});
        break;
      case "identifySuspectNeiKuNanResult":
        this.setState({word: play.part2.identifySuspect.neiKuNan.result});
        break;
      case "identifySuspectMoXianSheng":
        this.setState({word: play.part2.identifySuspect.moXianSheng.talk});
        break;
      case "identifySuspectMoXianShengResult":
        this.setState({word: play.part2.identifySuspect.moXianSheng.result});
        break;
      case "identifySuspectShenMiRen":
        this.setState({word: play.part2.identifySuspect.shenMiRen.talk});
        break;
      case "identifySuspectShenMiRenResult":
        this.setState({word: play.part2.identifySuspect.shenMiRen.result});
        break;
      default:
        return;
    }
  }
  
  nextTopic (num, len, status) {
    if(num === len - 1) {
      this.props.onData({
        status: false,
        statusClass: "title hide"
      });
      this.setState({
        topicNum: 0
      });

      if(status === "clickBlack") {
        this.props.onProp(true);
      }

      if(status === "talkToSuspectMoXianSheng") {
        this.props.onTalk("moxianshen",true);
      }

      if(status === "talkToSuspectShenMiRen") {
        this.props.onTalk("shenmiren",true);
      }

      if(status === "talkToSuspectNeiKuNan") {
        this.props.onTalk("neikunan",true);
      }

      if(status === "identifySuspectNeiKuNan") {
        this.props.onEnd(true, "neokunan");
      }

      if(status === "identifySuspectMoXianSheng") {
        this.props.onEnd(true, "moxiansheng");
      }

      if(status === "identifySuspectShenMiRen") {
        this.props.onEnd(true, "shenmiren");
      }
      return;
    }
    
    this.setState({
      topicNum: num + 1
    });
  }

  render() {
    this.getWord(this.props.data.status);
    return (
      <div>
        <div className={ this.props.data.statusClass } onClick={ () => this.nextTopic(this.state.topicNum, word.length, this.props.data.status) }>
          <div className="title-content-wrap">
            { this.state.word[this.state.topicNum] }
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
