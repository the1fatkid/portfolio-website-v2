import { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm.jsx'
import PlaneIcon from '../assets/icon-plane.png'
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const planeRef= useRef(null)
  const formRef = useRef(null);

  useEffect(()=>{
    window.addEventListener("click", ()=> {
      setIsOpen(false);
      formRef.current.reset(); // Clear the form
    })

  }, [])

  const handleEnvelopeClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to window
    setIsOpen(true);  
  };

  function handleFormSubmit(e){
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,      
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY        
    )
    .then(()=>{
      setMessage("Message sent!");
      setTimeout(()=>{
        setMessage("");
      }, 2000);

      setIsOpen(false);
      setIsSending(false);

      planeRef.current.classList.add("fly-away");
      setTimeout(()=>{
        planeRef.current.classList.remove("fly-away");
      }, 2000)

      formRef.current.reset(); // Clear the form
    })
    .catch((error)=>{
      setMessage("Oops! Try again");
      setTimeout(()=>{
        setMessage("");
      }, 2000);

      console.error('EmailJS error:', error);
      setIsSending(false);
    })
  }

  return (
    <section className="contact" id="contact">
      <section className="bottom-arc">
        <h2>-CONTACT ME-</h2>
        <div 
          className={`envelope ${isOpen ? 'open' : ''}`}
          onClick={handleEnvelopeClick}
          style={{ cursor: 'pointer' }}
        >
          <img ref={planeRef} className="plane-img" src={PlaneIcon} alt="" />
          <div className="base-div"></div>
          <div className="left-triangle"></div>
          <div className="right-triangle"></div>
          <div className="bottom-triangle">
            <p 
              className="msg-status"
              style= {{
                color: message === "Message sent!" ? "#1cb06b" : "#b80600"
              }}
            >
              {message}
            </p>
            <p>To: shivika.tech@gmail.com</p>
          </div>
          <div className="top-flap"> </div>
          
          <div className="letter">
            <ContactForm formRef={formRef} handleSubmit={handleFormSubmit} isSending={isSending}/>
          </div>
      </div>
    </section>
    </section>
    
  );
}