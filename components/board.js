import React, { Component } from 'react';



const Square = (props) => {
  color = props.color;
  return <div style={{height:'100', width:'100', backgroundColor:{color}}} />
}

const createBoard = function (dimensions) {
  console.log('creating board');
  let result = []
  let boardDimensions = dimensions*dimensions;
  let box = 0;
  while(box < boardDimensions){
    if(!box % 2){
      result.push(<Square color="black"/>)
    } else {
      result.push(<Square color="white"/>)
    }
  }

  return result.map(e => {
    return e;
  })
  // return result.reduce((acc,val)=> {
  //   return acc + val;
  // })
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
    let checkerBoard = createBoard(this.state.dimensions)

    return (
      <div style={{width:{widthHeight}, height:{widthHeight}, display:'flex'}}>
      {checkerBoard}
      <input name="dimensions" value={this.state.dimensions} onChange={this.changeDimensions} />
      </div>
    )
  }
}

export default Board;
