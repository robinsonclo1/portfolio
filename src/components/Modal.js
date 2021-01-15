import React from 'react'
import './Modal.scss'

class Modal extends React.Component {
  constructor() {
    super()
    this.closeModal = this.closeModal.bind(this)
  }
  
  closeModal() {
    this.props.closeModal()
  }
  
  render() {
    return (
      <>
        <div id="modal" className="hex-modal" aria-hidden="true" aria-labelledby="modal-title" aria-describedby="modal-description" role="dialog">
          <div role="document" className="hex-interior">
            <div id="modal-description" className="screen-reader-offscreen">Beginning of dialog window. It begins with a
              heading 1 called &quot;{this.props.item.title}&quot;. Escape will cancel and close the window.
            </div>
            {this.props.icon}
            <h1 id="modal-title">{this.props.item.title}</h1>
            <p>{this.props.item.body}</p>
            <button id="modalCloseButton" className="btn-close hex-xs" onClick={this.closeModal}><span className="close">✕</span>
            </button>
          </div>
        </div>
        <div id="modal-overlay" tabIndex="-1"></div>
      </>
    )
  }
}

export default Modal
