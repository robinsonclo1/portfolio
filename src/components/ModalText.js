import React from 'react'
import ReactPlayer from "react-player"

class ModalText extends React.Component {
  constructor() {
    super()
  }
  

  render() {
    const text = this.props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return (
      <>
       {newText}
      </>
    )
  }
}

export default ModalText
