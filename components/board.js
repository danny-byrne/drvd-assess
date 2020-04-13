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
    let dimensions = this.state.dimensions;

    const board = function(){
      let checkerBoard = []
      let row = 0;
      while(row < dimensions){
        let col = 0;
        while(col < dimensions){
          if(row % 2 === 0){
            if(col % 2 === 0){
              board.push (<Square color="black"/>)
            } else {
              board.push (<Square color="white"/>)
            }
          }
          //if an odd row, reverse the order
          if(row % 2 !== 0){
            if(col % 2 === 0){
              board.push (<Square color="white"/>)
            } else {
              board.push (<Square color="black"/>)
            }
          }
          col++
        }
        row++   
      }
      return checkerBoard.join('')
    }


    return (
      <div>
      {board}
      <input name="dimensions" value={this.state.dimensions} onChange={this.changeDimensions} />
      </div>
    )
  }
}

export default Board;
