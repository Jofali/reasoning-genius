import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Part1 from '../part1/part1';
import Part2 from '../part2/part2';
import Title from '../title/title';
import Inventory from '../inventory/inventory';

import './partwrap.css';
import arrNext from '../assets/arrnext.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Part1 data={this.state.titleStatus} onData={ this.handleTitleStatusChange } />,
      arr: arrNext,
      arrStatus: "next",
      maxPartNum: 1,
      showPart: true,
      titleStatus: "title"
    };
    this.stepTo = this.stepTo.bind(this);
    this.handleTitleStatusChange = this.handleTitleStatusChange.bind(this);
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
          this.setState({ content: <Part1 data={this.state.titleStatus} onData={ this.handleTitleStatusChange } /> })
          this.setState({ arrStatus: "next" });
          break;
        case 1:
          this.setState({ content: <Part2 data={this.state.titleStatus} onData={ this.handleTitleStatusChange } /> })
          this.setState({ arrStatus: "prev" })
          break;
        default:
          this.setState({ content: <Part1 data={this.state.titleStatus} onData={ this.handleTitleStatusChange } /> })
      }
      this.setshow(true);
    }, 300);
    
  }

  setshow(bool) {
    this.setState({ showPart: bool });
  }

  handleTitleStatusChange(self, status) {
    if(typeof(self) === "boolean") {
      this.setState({ titleStatus: self });
      return;
    }
    self.setState({ titleStatus: status });
  }


  render() {
    console.log(1)
    return (
        <div className="App">
          <div className="arr" onClick={this.stepTo}>
            <img src={this.state.arr} className={this.state.arrStatus} alt=""/>
          </div>
          <CSSTransition
              in={this.state.showPart}
              timeout={300}
              classNames="sw"
              unmountOnExit
            >
              { this.state.content }
          </CSSTransition>
          <Title data={this.state.titleStatus} onData={ this.handleTitleStatusChange } />
          <Inventory />
        </div>
    );
  }
}

export default App;
