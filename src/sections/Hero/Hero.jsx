import {
  faDiscord,
  faFacebook,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../../assets/my_portfolio.png";
import { motion } from "framer-motion";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="h-screen w-screen" id="hero">
      <div className="max-w-[85rem] h-full mx-auto px-4 sm:px-6 lg:px-8 my-auto flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
          <div className="md:max-w-80 lg:max-w-2xl">
            <div>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
              >
                I'm <span className="text-neutral-300">Isuru Aravinda</span>
              </motion.h1>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-center block text-3xl text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
              >
                Fullstack <span className="text-neutral-300">Developer</span>
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-8 text-lg text-gray-800 dark:text-neutral-200"
              >
                A passionate full-stack developer, building web applications
                that solve real-world problems using modern technologies.
              </motion.p>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="mt-7 grid gap-3 w-full sm:inline-flex justify-center"
              >
                <a
                  className="transition hover:-translate-y-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Resume
                  <FontAwesomeIcon icon={faFile} size="lg" />
                </a>
                <a
                  className="transition hover:-translate-y-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#contact"
                >
                  Contact me
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="md:mt-20 mt-10"
              >
                <div className="flex items-start gap-10 justify-center text-white">
                  <a
                    href="https://www.linkedin.com/in/isuru-aravinda-ba69772b3/"
                    target="_blank"
                    className="transition hover:-translate-y-1"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://github.com/rkisuru"
                    target="_blank"
                    className="transition hover:-translate-y-1"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084137778715&mibextid=ZbWKwL"
                    target="_blank"
                    className="transition hover:-translate-y-1"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://medium.com/@iaravinda33"
                    className="transition hover:-translate-y-1"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faMedium}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <motion.img
              className="w-[200px] sm:w-96 mx-auto rounded-md"
              src={hero}
              alt="Hero Image"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
