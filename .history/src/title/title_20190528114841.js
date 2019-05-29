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

    this.nextTopic = this.nextTopic.bind(this);
  }

  getWord(status) {
    let word = "";
    // eslint-disable-next-line default-case
    switch(status)
    {
      case "begin":
        word = play.begin;
        break;
      case "part1":
        word = play.part1.one;
        break;
      case "clickBlack":
        word = play.part1.clickBlack;
        break;
      case "talkToSuspectNeiKuNan":
        word = play.part2.talkToSuspect.neiKuNan;
        break;
      case "talkToSuspectMoXianSheng":
        word = play.part2.talkToSuspect.moXianSheng;
        break;
      case "talkToSuspectShenMiRen":
        word = play.part2.talkToSuspect.shenMiRen;
        break;
      case "identifySuspectNeiKuNan":
        word = play.part2.identifySuspect.neiKuNan.talk;
        break;
      case "identifySuspectNeiKuNanResult":
        word = play.part2.identifySuspect.neiKuNan.result;
        break;
      case "identifySuspectMoXianSheng":
        word = play.part2.identifySuspect.moXianSheng.talk;
        break;
      case "identifySuspectMoXianShengResult":
        word = play.part2.identifySuspect.moXianSheng.result;
        break;
      case "identifySuspectShenMiRen":
        word = play.part2.identifySuspect.shenMiRen.talk;
        break;
      case "identifySuspectShenMiRenResult":
        word = play.part2.identifySuspect.shenMiRen.result;
        break;
    }

    return word;
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
    let word = this.getWord(this.props.data.status);
    return (
      <div>
        <div className={ this.props.data.statusClass } onClick={ () => this.nextTopic(this.state.topicNum, word.length, this.props.data.status) }>
          <div className="title-content-wrap">
            <p dangerouslySetInnerHTML = {{__html:word[this.state.topicNum]}}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
