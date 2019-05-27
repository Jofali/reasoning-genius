import React, { Component } from 'react';

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
      title: {
        status:"part1",
        statusClass: "title"
      },
      content: <Part1 />,
      arr: arrNext,
      arrStatus: "next",
      maxPartNum: 1,
      showPart: false,
      prop: false
    };
    this.stepTo = this.stepTo.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePropChange= this.handlePropChange.bind(this);
  }
  
  componentDidMount() {
    this.setState({content: <Part1 prop={this.state.prop} onProp={ this.handlePropChange } data={this.state.title} onData={ this.handleTitleChange } />});
  }

  partNum = 0;

  stepTo() {
    if(this.partNum === this.state.maxPartNum) {
      this.partNum = 0;
      this.setState({showPart: false});
    } else {
      this.partNum += 1;
      this.setState({showPart: true});
    }

    switch(this.partNum)
    {
      case 0:
        this.setState({ arrStatus: "next" });
        break;
      case 1:
        this.setState({ arrStatus: "prev" });
        break;
      default:
        return;
    }
  }

  setshow(bool) {
    this.setState({ 
      showPart: bool
    });
  }

  handleTitleChange(status) {
    this.setState({ title: status });
  }

  handlePropChange(status) {
    this.setState({ prop: status });
  }

  render() {
    console.log(this.partNum)
    return (
      <div className="App">
        <div className="arr" onClick={this.stepTo}>
          <img src={this.state.arr} className={this.state.arrStatus} alt=""/>
        </div>
        <div className={`partSlide ${this.state.showPart === true ? "partSlide-2": null}`}>
          <Part1 prop={this.state.prop} onProp={ this.handlePropChange } data={this.state.title} onData={ this.handleTitleChange } />
          <Part2 data={this.state.title} onData={ this.handleTitleChange } />
        </div>
        <Title prop={ this.state.prop } onProp={ this.handlePropChange } data={this.state.title} onData={ this.handleTitleChange } />
        <Inventory />
      </div>
    );
  }
}

export default App;
