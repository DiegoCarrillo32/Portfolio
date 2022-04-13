import React from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'
export const Modal = ({isOpened, onClose }) => {
    return isOpened ? (

        ReactDOM.createPortal( 
            <div  className='modal'>
                <form className='modal-form' >
                    <div className='close-modal' onClick={() => onClose()}>
                        X
                    </div>
                    <div className='modal-form-data'>
                        <h1>Send me an email!</h1>
                        
                        <label>Email</label>
                        <input type="text" placeholder='Your email'/>
                        <label>Name</label>
                        <input type="text" placeholder='Your name' />

                        <textarea placeholder='Tell me!' />
                        <button>Send email</button>
                    </div>
                </form>
            </div>,
        document.getElementById('modal') )
    ):
    null
}