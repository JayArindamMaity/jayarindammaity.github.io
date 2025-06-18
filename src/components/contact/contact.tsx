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

// this needs to be completed T_T

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
          <p>Use this to get in touch with me about anything XD</p>
          <div className="contact-icons">
            <a href="#">
              <SlSocialGithub />
            </a>
            <a href="#">
              <SlSocialLinkedin />
            </a>
            <a href="#">
              <SlSocialInstagram />
            </a>
            <a href="#">
              <SlSocialTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}