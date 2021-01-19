import React from 'react'
import './Modal.scss'
import ReactPlayer from "react-player"

class Modal extends React.Component {
  constructor() {
    super()
    this.closeModal = this.closeModal.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
  }
  
  onKeyUp(e) {
    if (e.key === 'Escape'){
      this.closeModal()
    }
  }
  
  closeModal() {
    const hexId = "btn-modal-" + this.props.item.title
    document.getElementById(hexId).focus()
    this.props.closeModal()
  }
  
  render() {
    return (
      <>
        <div id="modal" className="hex-modal" aria-labelledby="modal-title"
             aria-modal="true" aria-describedby="modal-description" role="dialog" onKeyUp={this.onKeyUp}>
          <div role="document" className="hex-interior">
            <div id="modal-description" className="screen-reader-offscreen">Beginning of dialog window. It begins with a
              heading 1 called &quot;{this.props.item.title}&quot;. Escape will cancel and close the window.
            </div>
            {this.props.icon}
            <h1 id="modal-title">{this.props.item.title}</h1>
            <div className="modal-body">
              <p>{this.props.item.body}</p>
              {this.props.item.embedUrl &&
              <ReactPlayer
                url={this.props.item.embedUrl}
                width='90%'
                height='300px'
              />
              }
            </div>
            <button id="modalCloseButton" className="btn-close hex-xs"
                    aria-label="Close modal" onClick={this.closeModal}><span className="close">✕</span>
            </button>
          </div>
        </div>
        <div id="modal-overlay" tabIndex="-1" onClick={this.closeModal}></div>
      </>
    )
  }
}

export default Modal
