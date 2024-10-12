/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const form = useRef(null);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    form.current &&
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully", { autoClose: 2000 });
          if (form.current) {
            (form.current as HTMLFormElement).reset();
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not sent", { autoClose: 2000 });
        }
      );
  };
  return (
    <div id="contact" className="w-full  flex flex-col items-center justify-center pt-16 overflow-hidden">
      <ToastContainer />
      <div className="text-4xl sm:text-4xl font-bold p-4 text-green-500 mb-4">
        Contact Us
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex  flex-col sm:flex-row justify-around items-center w-full px-4 sm:px-6 mb-3 max-w-[1920px]">
          <div className="sm:flex hidden justify-center items-center w-full sm:w-[50%] h-[30vh] sm:h-[50vh] mb-6 sm:mb-0">
            <div className="w-full sm:w-[80%] h-full bg-black border-none rounded-lg sm:rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.466243279665!2d79.00171792141964!3d21.12491990991707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eab12bd10cef%3A0xf6e67c2f0a066c27!2sG.%20H.%20Raisoni%20Institute%20of%20Engineering%20and%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1705843369091!5m2!1sen!2sin"
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
          <div className="w-full sm:w-[50%]  flex flex-col items-center bg-black border-2 border-green-500 justify-evenly rounded-lg px-4 py-2 sm:rounded-xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col items-center"
            >
              <div className="text-2xl sm:text-2xl text-green-500 font-bold mb-4 text-center">
                Feel free to ask us any questions
              </div>
              <div className="w-full mb-3">
                <label className="text-lg sm:text-xl font-bold text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-3 py-2 rounded-lg border-2 bg-black text-white border-green-400 focus:ring-2 focus:ring-green-500 focus:shadow-md text-lg"
                  required
                  minLength={3}
                />
              </div>
              <div className="w-full mb-3">
                <label className="text-lg sm:text-xl font-bold text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-3 py-2 rounded-lg border-2 bg-black text-white border-green-400 focus:ring-2 focus:ring-green-500 focus:shadow-md text-lg"
                />
              </div>
              <div className="w-full mb-3">
                <label className="text-lg sm:text-1xl font-bold text-white mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-3 py-2 rounded-lg border-2 bg-black text-white border-green-400 focus:ring-2 focus:ring-green-500 focus:shadow-md text-lg"
                  required
                  minLength={3}
                />
              </div>
              <div className="w-full py-2">
                <label className="text-lg sm:text-xl font-bold text-white mb-1">
                  Message
                </label>
                <textarea
                  name="message"

                  className="w-full px-3 py-2 rounded-lg border-2 bg-black text-white border-green-400 focus:ring-2 focus:ring-green-500 focus:shadow-md text-lg"
                  required
   
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-[10em]  sm:py-3 rounded-lg bg-green-500 text-white font-bold text-lg sm:text-xl hover:bg-green-600 transition-all duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;