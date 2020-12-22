import React  from 'react'
import Hex from "./Hex";

class HexRow extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className="hex-row">
        {this.props.inverted &&
          <>
            <Hex size={'hex-sm'}/>
            <Hex size={'hex-md'}/>
          </>
        }
        {!this.props.inverted &&
          <>
            <Hex size={'hex-md'}/>
            <Hex size={'hex-sm'}/>
          </>
        }
      </div>
    )
  }
}

export default HexRow

/*
start size layout:
 [0,0] large - [0, 1] small     | small large | small med | med small ? isLargeRow is
 [1,0] small - [1, 1] med
 [2, 0] med  - [2, 1] small
 
on hover(x,y)
 x-1,y -> small, x-1, y+-1 med
 x,y -> large  , [x,y+-1] small
 x+1,y -> small, x+1, y+-1 med
 
 */