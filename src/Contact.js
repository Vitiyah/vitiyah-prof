import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { useForm } from "@formspree/react";
import { useState } from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqydzww");
  const [outline, setOutline] = useState(false);

  const handleOutline = (e) => {
    if (e.target.value === "") {
      setOutline(true);
    } else {
      setOutline(false);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <section
        id="contact"
        className="contact-container w-screen h-screen bg-zinc-900 flex items-center"
      >
        <div className="contact-info w-full h-3/4 p-48">
          <h2 className="title">CONTACT</h2>
          <h4 className="heading-white pt-4">Get in touch with me</h4>
          <p className="pt-4">
            Click on the icons to directly connect with me through the social
            media
          </p>
          <div className="social-media pt-10 flex items-center gap-10">
            <a
              href="https://wa.me/+60108837406"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={30} className="text-rose-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/vitiyah-manimaran-405125157/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} className="text-rose-500" />
            </a>
            <a
              href="mailto:vitiyah95@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail size={30} className="text-rose-500" />
            </a>
          </div>
        </div>
        <div className="contact-form flex flex-col justify-center w-full h-3/4">
          <form
            className="flex flex-col items-start"
            action="https://formspree.io/f/xnqydzww"
            method="POST"
            onSubmit={handleSubmit}
          >
            <label>NAME</label>
            <div className="name flex items-center justify-center relative">
              <input
                className={outline ? "input-active mb-8" : "mb-8"}
                type="text"
                id="name"
                onChange={handleChange}
              />
              <FaUser className="absolute top-[25%] translate-y-[-25%] left-[3%]" />
            </div>
            <label>EMAIL</label>
            <div className="name flex items-center justify-center relative">
              <input
                className="mb-8"
                type="email"
                id="email"
                onChange={handleChange}
              />
              <AiOutlineMail className="absolute top-[25%] translate-y-[-25%] left-[3%]" />
            </div>
            <label>MESSAGE</label>
            <textarea
              name="message"
              cols="80"
              rows="5"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btne h-10 bg-white p-4 w-36 mt-8 border-white border-2 flex items-center justify-center"
            >
              Hit me up <FaTelegramPlane className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
