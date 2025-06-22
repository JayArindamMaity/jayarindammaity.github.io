import "./contact.css";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/myzjpzdr", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-main">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        toastClassName="custom-toast"
      />
      <div className="contact-heading">Get in touch with me:</div>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-eles">
          <div className="contact-words">
            If you chose to contact me, here are few things you can talk about:
            <ul>
              <li>Your project idea and datails</li>
              <li>Assistance with your current project</li>
              <li>More information on technical things</li>
              <li>Anime recomendations XD</li>
              <li>You can also challenge me to a game of League of Legends</li>
            </ul>
          </div>
          <div className="contact-icons">
            <a href="https://github.com/JayArindamMaity" target="blank">
              <SlSocialGithub />
            </a>
            <a href="https://www.linkedin.com/in/jayarindammaity/" target="blank">
              <SlSocialLinkedin />
            </a>
            <a href="https://www.instagram.com/jayarindammaity/" target="blank">
              <SlSocialInstagram />
            </a>
            <a href="#" target="blank">
              <SlSocialTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}