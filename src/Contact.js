import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import { useForm } from "@formspree/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqydzww");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [timesName, setTimesName] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [timesEmail, setTimesEmail] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [timesMessage, setTimesMessage] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);

  const nameErrorFunc = (e) => {
    if (e.target.value === "") {
      setNameError(true);
      setTimesName(true);
      setCheckName(false);
    } else {
      setNameError(false);
      setTimesName(false);
      setCheckName(true);
    }
  };

  const emailErrorFunc = (e) => {
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value !== "" && e.target.value.match(mailformat)) {
      setEmailError(false);
      setTimesEmail(false);
      setCheckEmail(true);
    } else {
      setEmailError(true);
      setTimesEmail(true);
      setCheckEmail(false);
    }
  };

  const messageErrorFunc = (e) => {
    if (e.target.value === "") {
      setMessageError(true);
      setTimesMessage(true);
      setCheckMessage(false);
    } else {
      setMessageError(false);
      setTimesMessage(false);
      setCheckMessage(true);
    }
  };

  const successStatus = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let textarea = document.getElementById("textarea");
    if (name.value === "" || email.value === "" || textarea.value === "") {
      toast.error("Please fill out empty fields !");
    } else {
      toast.success("Your message was successfully submitted !");
    }
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
          <form className="flex flex-col items-start" onSubmit={handleSubmit}>
            <label>NAME</label>
            <div className="name flex items-center justify-center relative">
              <input
                className={nameError ? "input-active mb-2" : "mb-2"}
                type="text"
                id="name"
                onChange={nameErrorFunc}
              />
              <FaUser className="absolute left-[3%] top-[28%]" />
              <div className="w-4 h-4 rounded-full">
                <FaTimesCircle
                  className={
                    timesName
                      ? "show-times absolute right-[6%] top-[27%]"
                      : "hide-times"
                  }
                />
              </div>
              <div className="w-4 h-4 rounded-full">
                <FaCheckCircle
                  className={
                    checkName
                      ? "show-check absolute right-[6%] top-[27%]"
                      : "hide-check"
                  }
                />
              </div>
            </div>
            <p
              className={
                nameError
                  ? "text-xs mb-4 error-message-show"
                  : "text-xs mb-4 error-message-hidden"
              }
            >
              Name field is empty !
            </p>
            <label>EMAIL</label>
            <div className="name flex items-center justify-center relative">
              <input
                className={emailError ? "input-active mb-2" : "mb-2"}
                type="email"
                id="email"
                onChange={emailErrorFunc}
              />
              <AiOutlineMail className="absolute left-[3%] top-[28%]" />
              <div className="w-4 h-4 rounded-full">
                <FaTimesCircle
                  className={
                    timesEmail
                      ? "show-times absolute right-[6%] top-[27%]"
                      : "hide-times"
                  }
                />
              </div>
              <div className="w-4 h-4 rounded-full">
                <FaCheckCircle
                  className={
                    checkEmail
                      ? "show-check absolute right-[6%] top-[27%]"
                      : "hide-check"
                  }
                />
              </div>
            </div>
            <p
              className={
                emailError
                  ? "text-xs mb-4 error-message-show"
                  : "text-xs mb-4 error-message-hidden"
              }
            >
              Email field is empty or invalid !
            </p>
            <label>MESSAGE</label>
            <div className="textarea flex items-center justify-center relative">
              <textarea
                id="textarea"
                className={messageError ? "input-active mb-2" : "mb-2"}
                name="message"
                cols="80"
                rows="5"
                onChange={messageErrorFunc}
              ></textarea>
              <div className="w-4 h-4 rounded-full">
                <FaTimesCircle
                  className={
                    timesMessage
                      ? "show-times absolute right-[6%] top-[50%] translate-y-[-50%]"
                      : "hide-times"
                  }
                />
              </div>
              <div className="w-4 h-4 rounded-full">
                <FaCheckCircle
                  className={
                    checkMessage
                      ? "show-check absolute right-[6%] top-[50%] translate-y-[-50%]"
                      : "hide-check"
                  }
                />
              </div>
            </div>
            <p
              className={
                messageError
                  ? "text-xs mb-4 error-message-show"
                  : "text-xs mb-4 error-message-hidden"
              }
            >
              Message field is empty !
            </p>
            <button
              type="submit"
              id="submitbtn"
              className="btne h-10 bg-white p-4 w-36 mt-8 border-white border-2 flex items-center justify-center"
              onClick={successStatus}
            >
              Hit me up !
              <FaTelegramPlane className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
