import React, { Component } from 'react';



const Square = (props) => {
  color = props.color;
  return <div style={{height:'100', width:'100', backgroundColor:{color}}} />
}

class Board extends Component {
  constructor(){
    super()

    this.state = {
      dimensions: 8
    }

    this.changeDimensions = this.changeDimensions.bind(this);
  }

  changeDimensions(e){
    this.setState({
      dimensions: e.target.value
    })
  }

  render () {

    let widthHeight = this.state.dimensions * 100;
    
    const board = function () {
      let result = []
      let dimensions = Math.pow(this.state.dimensions, 2);
      let box = 0;
      while(box < dimensions){
        if(!box % 2){
          result.push(<Square color="black"/>)
        } else {
          result.push(<Square color="white"/>)
        }
      }
      return result.reduce((acc,val)=> {
        return acc + val;
      })
    }

    return (
      <div style={{width:{widthHeight}, height:{widthHeight}, display:'flex'}}>
      {board}
      <input name="dimensions" value={this.state.dimensions} onChange={this.changeDimensions} />
      </div>
    )
  }
}

export default Board;
