import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Partwrap from './partwrap/partwrap';
import Begin from './begin/begin';
import End from './end/end';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Begin />,
      maxPartNum: 1,
      showPart: true,
      btnClass: "btn-game btn-game-begin-status",
      btnContent: "开始推理",
      end: null
    };
    this.stepTo = this.stepTo.bind(this);
  }

  partNum = 0;
  timer = null;

  handleEndChange(status) {
    this.setState({end: status});
  }

  stepTo() {
    if(this.partNum === this.state.maxPartNum) {
      this.partNum = 0;
    } else {
      this.partNum += 1;
    }

    this.setshow(false);
    if(this.timer !== null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout( () => {
      switch(this.partNum)
      {
        case 0:
          this.setState({ content: <Begin />, btnClass: "btn-game btn-game-begin-status", btnContent: "开始推理" });
          break;
        case 1:
          this.setState({ content: <Partwrap end={this.state.end} onEnd={this.handleEndChange} />, btnClass: "btn-game btn-game-end-status", btnContent: "退出" });
          break;
        case 2:
          this.setState({ content: <End />, btnClass: "btn-game btn-game-begin-status", btnContent: "重新开始" });
          break;
        default:
          this.setState({ content: <Begin />, btnClass: "btn-game btn-game-begin-status", btnContent: "开始推理" });
      }
      this.setshow(true);
    }, 300);
  }

  setshow(bool) {
    this.setState({ showPart: bool })
  }

  render() {
    return (
        <div className="App">
          <CSSTransition
              in={this.state.showPart}
              timeout={300}
              classNames="my-node"
              unmountOnExit
            >
              <div className="App-wrap">
                { this.state.content }
                <button className={this.state.btnClass} onClick={this.stepTo}>{this.state.btnContent}</button>
              </div>
          </CSSTransition>
        </div>
    );
  }
}

export default App;
