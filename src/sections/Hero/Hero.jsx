import {
  faDiscord,
  faFacebook,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="max-w-[85rem] h-full mx-auto px-4 sm:px-6 lg:px-8 my-auto flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
          <div className="md:max-w-80 lg:max-w-2xl">
            <div>
              <h1 className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Hi! I'm <span className="text-black">Isuru Aravinda</span>
              </h1>
              <h1 className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Fullstack <span className="text-black">Developer</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                As a full-stack web developer, I specialize in crafting robust
                and user-friendly web applications. With a solid foundation in
                both front-end and back-end development, I enjoy turning ideas
                into reality. I'm currently completing my BSc. Honours Degree in
                Computing & Information Systems at Sabaragamuwa University of
                Sri Lanka.
              </p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="transition hover:-translate-y-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Resume
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="transition hover:-translate-y-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Contact me
                </a>
              </div>

              <div className="md:mt-20 mt-10">
                <div className="flex items-start gap-10">
                  <a href="#" className="transition hover:-translate-y-1">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                  <a href="#" className="transition hover:-translate-y-1">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                  <a href="#" className="transition hover:-translate-y-1">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                  <a href="#" className="transition hover:-translate-y-1">
                    <FontAwesomeIcon
                      icon={faMedium}
                      size="2xl"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[200px] sm:w-96 mx-auto rounded-md"
              src={hero}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
