import { useEffect, useState } from "react";
import emailjs, { init } from "emailjs-com";
import { AiFillLinkedin } from "react-icons/ai";
import { TiPhone } from "react-icons/ti";
import { IoMdMailOpen, IoLogoWhatsapp } from "react-icons/io";
init("user_wDDr0OQVCk88Xw4XU1Q4O");

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    console.log("state changed");
  }, []);

  // EmailJS function for sending email with the FORM.
  const sendMessage = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: "danielbernhardt1996@outlook.com",
      subject: subject,
      message: message,
    };

    emailjs.send("service_upq4gtj", "template_ybrb1lo", templateParams).then(
      function (response) {
        alert("SUCCESS!", response.status, response.text);
      },
      function (err) {
        alert("ERROR!", err.status, err.text);
      }
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <section className="content-full">
        <div className="contact-background">
          <div className="contact-text">
            <h1>Contact me</h1>
            <p>
              If you have any questions, requests or would like to get in touch,
              please do not hestitate to send me a message using the form below.
            </p>
          </div>
          <form onSubmit={sendMessage} method="POST">
            <div className="contact-small-container">
              <input
                type="text"
                className="contact-name"
                placeholder="Name"
                key="random1"
                value={name}
                onChange={handleNameChange}
                required
              ></input>
              <input
                placeholder="Email"
                key="random2"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              ></input>
            </div>
            <div className="contact-subject">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                key="random3"
                onChange={handleSubjectChange}
              ></input>
            </div>
            <div className="contact-message">
              <textArea
                type="text"
                placeholder="Message"
                key="random4"
                rows="3"
                value={message}
                onChange={handleMessageChange}
                required
              ></textArea>
            </div>
            <div className="btn-container">
              <a href="#" onClick={sendMessage} className="btn-standard">
                Submit
              </a>
            </div>
          </form>
          <div className="social-icons">
            <a href="tel:+46705189424">
              <TiPhone />
            </a>
            <a href="mailto:danielbernhardt1996@outlook.com">
              <IoMdMailOpen />
            </a>
            <a
              href="https://www.linkedin.com/in/danielbernhardtt/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="
https://api.whatsapp.com/send?phone=46705189424&text=Hey%20Daniel!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20contact%20you%20regarding%20..."
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
