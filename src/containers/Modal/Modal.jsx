import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from '@emailjs/browser';
import { GrClose } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import "./Modal.css";
export const Modal = ({ isOpened, onClose }) => {
  const [Form, setForm] = useState({name:"", message:"", email:""});
  const [Valid, setValid] = useState(false)
  const form = useRef()
  const onChange = ({ target }) => {
    setForm({
      ...Form,
      [target.name]: target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z6ydm4n', 'template_n90arh2', form.current, 'P7yYUUgm6YOuTvb9D')
    .then(() => {
      setForm({name:"", message:"", email:""})
      setValid(true)
    }, () => {
      setValid(false)
    });
  };
  return isOpened
    ? ReactDOM.createPortal(
        <div className='modal'>
          <form className='modal-form' onSubmit={onSubmit} ref={form}>
            <div className='close-modal' onClick={() => onClose()}>
              <GrClose size={24} />
            </div>
            <div className='modal-form-data'>
              <h1>Contact me</h1>
              
              <input
                required
                name="email"
                type='email'
                value={Form.email}
                placeholder='Write your email'
                onChange={onChange}
              />
              
              <input
                required
                name="name"
                type='text'
                value={Form.name}
                placeholder='Write your name'
                onChange={onChange}
              />
              <div className='label'>
                <label>Message</label>
              </div>
              <textarea name="message" required placeholder='Leave your message!' onChange={onChange} value={Form.message} />
              <div className='button'>
                <button type='submit'>
                  <SiMinutemailer /> Send email
                </button>
              </div>
              {
                !Valid && <span>An error ocurred while sending image</span>
              }
            </div>
            
          </form>
        </div>,
        document.getElementById("modal")
      )
    : null;
};
