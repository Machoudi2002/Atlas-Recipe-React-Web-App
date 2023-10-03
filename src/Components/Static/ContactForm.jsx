import { useState } from 'react';

const ContactForm = () => {
    const [formStat, setFormStat] = useState("Submit")
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setFormStat("Email Sent")

        }, 500)

        setTimeout(() => {
            setFormStat("Submit")

        }, 2000)
    }

    return (
        <div className="container py-5">
            <h1 className="text-center display-3 py-1">Contact Us</h1>
            <form action="mailto:podkisaki@gmail.com" method="post" encType="text/plain" onSubmit={handleSubmit} className='spacing'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required />
                </div>

                <button type="submit" className="btn btn-primary">{formStat}</button>
            </form>
        </div>
    );
}

export default ContactForm;
