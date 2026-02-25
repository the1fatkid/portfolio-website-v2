export default function ContactForm({formRef, handleSubmit, isSending}) {
    return (
        <form ref={formRef} className="contact-form" action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                placeholder='Leave your message...'
                required
            ></textarea>
            <button type='submit'>
                {isSending? "Sending..." : "Send"}
            </button>
        </form>
    )
}
