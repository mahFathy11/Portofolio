import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone } from 'lucide-react'
import contactImg from '../assets/contact1.jpg'
import contactFlip from '../assets/contact2.jpg'

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.2c0-.9.3-1.5 1.7-1.5H17V2.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3.1h2.3v8h3.2Z" fill="currentColor"/>
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.9 8.2A1.8 1.8 0 1 1 6.9 4.6a1.8 1.8 0 0 1 0 3.6ZM5.1 9.9h3.6v10.2H5.1V9.9Zm5.8 0h3.4v1.4h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v5.9h-3.6V19c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1v4.2H10.9V9.9Z" fill="currentColor"/>
        </svg>
    )
}

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2.2A10 10 0 0 0 8.3 21.7c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.1a10.5 10.5 0 0 1 5.6 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.4 5-4.7 5.3.4.4.7 1 .7 2.1v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z" fill="currentColor"/>
        </svg>
    )
}

export default function Contact(){
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState({ type: 'idle', message: '' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!isFormValid) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' })
            return
        }

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: 'error',
                message: 'EmailJS environment variables are missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
            })
            return
        }

        setStatus({ type: 'sending', message: 'Sending...' })

        emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully.' })
                setFormData({ name: '', email: '', message: '' })
            })
            .catch(() => {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
            })
    }

    return(
        <div className="contact" id="contact">
            <div className="content">
            <div className="message">
                 <h2>Contact Me</h2>
                 <form ref={formRef} className="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="name">NAME</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
                    <label htmlFor="message">MESSAGE</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
                    <button type="submit" disabled={!isFormValid || status.type === 'sending'}>
                        {status.type === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status.message && (
                        <p className={`form-status ${status.type}`}>
                            {status.message}
                        </p>
                    )}
                </form>

            </div>
            <div className="contact-info">
                <div className="contact-img-wrap">
                    <div className="contact-img">
                        <img
                            src={contactImg}
                            alt="Mahmoud Fathy profile portrait"
                            className="contact-img-front"
                            loading="lazy"
                            fetchPriority="high"
                            decoding="async"
                            width={600}
                            height={600}
                        />
                        <img
                            src={contactFlip}
                            alt="Mahmoud Fathy alternate profile portrait"
                            className="contact-img-back"
                            loading="lazy"
                            fetchPriority="high"
                            decoding="async"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
                <div className="contact-data">
                    <div className="phone">
                        <Phone size={18} strokeWidth={2} aria-hidden="true" />
                        <span>+20 111 290 0363</span>
                    </div>
                    <div className="email">
                        <Mail size={18} strokeWidth={2} aria-hidden="true" />
                        <span>mf1891649@gmail.com</span>
                    </div>
                </div>

                <div className="social-links" aria-label="Social media links">
                    <a href="https://www.facebook.com/profile.php?id=61575362691630" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%81%D8%AA%D8%AD%D9%8A-76b007310?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/mahFathy11" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                        <GithubIcon />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}