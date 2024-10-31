import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgweyoa");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (state.succeeded && !emailSent) {
      toast.success("Email sent successfully!", {
        duration: 3000,
        position: "top-center",
      });
      setEmailSent(true);
    }
  }, [state.succeeded, emailSent]);

  const onSubmit = (event) => {
    handleSubmit(event);
    setEmailSent(false);
  };

  return (
    <div id="contact" className="pt-28">
      <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <div className="max-w-2xl lg:max-w-4xl mx-auto">
          <div className="text-center">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
            >
              Contact
            </motion.h1>
          </div>

          <div className="mt-16 grid items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700"
            >
              <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Connect with Me
              </h2>
              <p className="text-gray-600 dark:text-neutral-400 mb-10">
                If you want to know more about me or my work, or if you would
                just like to say hello, send me a message. I'd love to hear from
                you.
              </p>
              <form onSubmit={onSubmit} className="pb-10">
                <div className="grid md:gap-6 gap-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your email address"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your subject"
                      required
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="mt-8 grid">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent  bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Send
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
              <div className="flex flex-wrap justify-between items-center gap-2 flex-col sm:flex-row">
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-neutral-400">
                    © 2024 Isuru Aravinda.
                  </p>
                  <p className="text-xs text-center text-gray-600 dark:text-neutral-400">
                    All rights reserved.
                  </p>
                </div>

                <ul className="flex flex-wrap items-center">
                  <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                    <a
                      className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                      href="https://www.linkedin.com/in/isuru-aravinda-ba69772b3/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                    <a
                      className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                      href="https://github.com/rkisuru"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li className="inline-block pe-4 text-xs">
                    <a
                      className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                      href="https://www.facebook.com/profile.php?id=100084137778715&mibextid=ZbWKwL"
                      target="_blank"
                    >
                      FaceBook
                    </a>
                  </li>
                  <li className="inline-block pe-4 text-xs">
                    <a
                      className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                      href="https://medium.com/@iaravinda33"
                      target="_blank"
                    >
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
