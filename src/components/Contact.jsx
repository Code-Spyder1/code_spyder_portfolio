import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "code.spyder.dev@gmail.com";

  // -------------------------
  // Form State
  // -------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  // -------------------------
  // Submit Function
  // -------------------------
  function handleSubmit(event) {
    event.preventDefault();

    setSending(true);

    emailjs
      .send(
        "service_dmczbkp",
        "template_rgj6q7p",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: contactEmail,
        },
        "8NjC9h1DxNueN-RMh"
      )
      .then((result) => {
        console.log("EmailJS send result:", result);
        setStatus("success");
        setSending(false);

        // Clear the form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS send error:", error);
        setStatus("error");
        setSending(false);
      });
  }

  // -------------------------
  // JSX
  // -------------------------
  return (
    <section id="contact" className="section contact-layout">

      <div className="contact-left">

        <div className="contact-cards">

          <div className="contact-card">
            <h3>TikTok</h3>
            <p>@code.spyder</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>{contactEmail}</p>
          </div>

          <div className="contact-card">
            <h3>🐙 GitHub</h3>
            <p>
              <a href="https://github.com/Code-Spyder1">
                github.com/Code-Spyder1
              </a>
            </p>
          </div>

        </div>

      </div>

      <div className="contact-right">

        <h2>Contact Me!</h2>

        <p>
          Whether you have a project in mind or just want to say hello,
          I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(event) =>
              setFormData({
                ...formData,
                subject: event.target.value,
              })
            }
            required
          />

          <textarea
            placeholder="Tell me about your project"
            value={formData.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
            required
          />

          <button
            type="submit"
            className="contact-btn"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact-success">
              ✅ Thanks! Your message has been sent. I'll get back to you as soon as possible.
            </p>
          )}

          {status === "error" && (
            <p className="contact-error">
              ❌ Sorry! Something went wrong. Please try again.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;