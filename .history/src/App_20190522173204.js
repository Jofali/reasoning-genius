import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Partwrap from './partwrap/partwrap';
import Begin from './begin/begin';

import './App.css';
import arrNext from './assets/arrnext.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Begin />,
      arr: arrNext,
      arrStatus: "next",
      maxPartNum: 1,
      showPart: true
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
          this.setState({ content: <Begin /> })
          this.setState({ arrStatus: "next" });
          break;
        case 1:
          this.setState({ content: <Partwrap /> })
          this.setState({ arrStatus: "prev" })
          break;
        default:
          this.setState({ content: <Begin /> })
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
              { this.state.content }
          </CSSTransition>
          <button className="btn-begin" onClick={this.stepTo}>Begin</button>
        </div>
    );
  }
}

export default App;
