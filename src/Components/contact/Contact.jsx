import { useState } from "react"
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { playClick1, playClick2 } from "../../utils/ClickSound";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            await emailjs.send("service_apna7gn", "template_kwow7yj", form, "KcKGZpdTkxRiIUQc1");

            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus(`Failed: ${error.text || error.message}`);
        }
    };

    return (
        <section className="contact" id="contact">
            <h2>I'm Interested As An Employer</h2>

            <form onSubmit={sendEmail} className="full-mail">
                <div className="input-container input">
                    <input name="name" type="name" placeholder="" value={form.name} onClick={() => { playClick1(); }} onChange={handleChange} required />
                    <label htmlFor="input" className="label" onClick={() => { playClick1(); }}>Your Name</label>
                </div>
                <div className="input-container input">
                    <input name="email" type="email" placeholder="" value={form.email} onClick={() => { playClick1(); }} onChange={handleChange} required />
                    <label htmlFor="input" className="label" onClick={() => { playClick1(); }}>Your email</label>
                </div>
                <div className="input-container input">
                    <input name="subject" type="text" placeholder="" value={form.subject} onClick={() => { playClick1(); }} onChange={handleChange} required />
                    <label htmlFor="input" className="label">Subject</label>
                </div>
                <div className="input-container message">
                    <textarea name="message" rows={2} type="text" placeholder="" value={form.message} onClick={() => { playClick1(); }} onChange={handleChange} required />
                    <label htmlFor="input" className="label">Message</label>
                    <button className="btn" type="submit" onClick={() => { playClick2(); }} disabled={status === "Sending..."}>Send</button>
                </div>
            </form>

            {status && <p>{status}</p>}

            <div className="direct-mail">
                <p>Or email me directly:</p>
                <button className="btn" onClick={() => { playClick2(); window.location.href = "mailto:guilhermejudai@hotmail.com"; }}>Open Email </button>
            </div>

            <div className="social">
                <h5>Socials:</h5>
                <a href="https://web.whatsapp.com/send/?phone=5543996845900&text&type=phone_number&app_absent=0" onClick={(e) => { e.stopPropagation(); playClick1(); }}><FaWhatsapp /></a>
                <a href="https://www.instagram.com/guilhermestand/" onClick={(e) => { e.stopPropagation(); playClick1(); }}><FaInstagram /></a>
                <a href="https://github.com/Scarlocks" onClick={(e) => { e.stopPropagation(); playClick1(); }}><FaGithub /></a>
                <a href="https://www.facebook.com/ScarLocks/?locale=pt_BR" onClick={(e) => { e.stopPropagation(); playClick1(); }}><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/guilhermehg/" onClick={(e) => { e.stopPropagation(); playClick1(); }}><FaLinkedin /></a>
                <a href="https://profile.indeed.com/p/guilhermeg-t79spqp" onClick={(e) => { e.stopPropagation(); playClick1(); }}><SiIndeed /></a>
            </div>
            <p>Feel free to contact me regarding job opportunities, collaborations, or freelance work.</p>


        </section>
    )
}

export default Contact