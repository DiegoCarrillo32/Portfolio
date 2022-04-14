import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr'
import { SiMinutemailer } from 'react-icons/si'
import './Modal.css'
export const Modal = ({isOpened, onClose }) => {
    const [Form, setForm] = useState({});
    const onChange = ({target}) => {
      setForm({
          ...Form,
          [target.name]: target.value
      })
    }
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(Form);
    }
    return isOpened ? (

        ReactDOM.createPortal( 
            <div  className='modal'>
                <form className='modal-form' onSubmit={onSubmit}>
                    <div className='close-modal' onClick={() => onClose()}>
                        <GrClose size={24} />
                    </div>
                    <div className='modal-form-data'>
                        <h1>Contact me</h1>
                        {/* <div className='label'>
                            <label>Email</label>
                        </div> */}
                        <input required type="email" placeholder='Write your email' onChange={onChange}/>
                        {/* <div className='label'>

                            <label>Name</label>
                        </div> */}
                        <input required type="text" placeholder='Write your name' onChange={onChange} />
                        <div className='label'>

                            <label>Message</label>
                        </div>
                        <textarea required placeholder='Leave your message!' />
                        <div className='button'>
                            <button type='submit'> <SiMinutemailer/> Send email</button>
                        </div>
                    </div>
                </form>
            </div>,
        document.getElementById('modal') )
    ):
    null
}