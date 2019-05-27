import React, { useState } from 'react';

import './title.css';
class Title extends React.Component {
  constructor() {
    super(props);
    let vcn = "title hide";
    if(props.data) {
      vcn = "title";
    }

    const dialogContext = {
      part1: {
        one: ["侦探: 这就是案发现场吗?",
              "侦探: 被害人丢了什么吗？",
              "助理: 丢了几个值钱物品，还有内裤",
              "侦探: 原来如此。。我认为犯人拿值钱的物品只是障眼法，真正的目的其实是内裤。嫌疑人带来了吗？",
              "助理: 带来了！我找到了在附近走来走去的可疑男子，以及可能偷走内裤的被害女性的熟人们。",
              "侦探: 原来如此，不亏是我的助手，接下来只要找到证据让犯人暴露，案件就解决了！",
              "助理：是的！"]
      },
      part2: {},
      end: {
        'f': ["就这样，可怜的头戴内裤的男人因为冤罪被警察带走了。", "Game over."],
        't': ["就这样，真凶被警察带走了。", "Clear."]
      }
    };
    this.state = {
      topicNum: 0,
      word: dialogContext.part1.one[0],
      vclassName: vcn
    }

  }
  nextTopic (num) {
    if(this.state.topicNum === 7) {
      this.setState({
        vclassName: "title hide"
      })
      return;
    }
    this.setState({
      vclassName: "title hide",
      topicNum: num + 1,
      word: dialogContext.part1.one[num + 1]
    });
  }

  render() {
    return (
      <div>
        <div className={ this.state.vclassName } onClick={ () => this.nextTopic(this.state.topicNum) }>
          <div className="title-content-wrap">
            { word }
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
