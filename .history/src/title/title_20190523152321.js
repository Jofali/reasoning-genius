import React, { useState, useEffect } from 'react';

import './title.css';
function Title(props) {
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
  const [topicNum, setTopicNum] = useState(0);
  const [word, setWord] = useState(dialogContext.part1.one[topicNum]);
  let vcn = "title hide";
  if(props.data) {
    vcn = "title";
  }
  const [vclassName, setVclassName] = useState(vcn);

  function nextTopic () {
    console.log(topicNum)
    if(topicNum === 7) {
      setVclassName("title hide");
      return;
    }
    setTopicNum(topicNum+1);
    setWord(dialogContext.part1.one[topicNum]);
  }
  return (
    <div>
      <div className={ vclassName } onClick={ nextTopic }>
        <div className="title-content-wrap">
          { word }
        </div>
      </div>
    </div>
  );
}

export default Title;
