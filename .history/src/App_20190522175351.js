import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Partwrap from './partwrap/partwrap';
import Begin from './begin/begin';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Begin />,
      maxPartNum: 1,
      showPart: true,
      btnClass: "btn-game btn-game-begin-status",
      btnContent: "开始推理"
    };
    this.stepTo = this.stepTo.bind(this);
  }

  partNum = 0;
  timer = null;
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
          this.setState({ content: <Begin />, btnClass: "btn-game btn-game-begin-status" })
          break;
        case 1:
          this.setState({ content: <Partwrap />, btnClass: "btn-game btn-game-end-status" })
          break;
        default:
          this.setState({ content: <Begin />, btnClass: "btn-game btn-game-begin-status" })
      }
      this.setshow(true);
    }, 300);
    
  }

  setshow(bool) {
    this.setState({ showPart: bool })
  }

  componentDidMount() {

  }

  render() {
    return (
        <div className="App">
          <CSSTransition
              in={this.state.showPart}
              timeout={300}
              classNames="sw"
              unmountOnExit
            >
              <div class="App-wrap">
              { this.state.content }
              <button className={this.state.btnClass} onClick={this.stepTo}>{this.statebtnContent}</button>
              </div>
          </CSSTransition>
         
        </div>
    );
  }
}

export default App;
