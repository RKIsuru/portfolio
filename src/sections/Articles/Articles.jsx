import React from "react";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <div id="articles" className="pt-28 h-screen w-screen">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white text-center"
      >
        Recent <span className="text-neutral-300">Articles</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5 }}
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10 mt-16">
          <a
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href="https://medium.com/@iaravinda33/integrating-keycloak-authentication-with-spring-boot-a-complete-guide-98df2c8d244a"
            target="_blank"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*UmGrfhebu8faubLIn-8RbQ.jpeg"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Integrating Keycloak Authentication with Spring Boot: A
                  Complete Guide
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Integrating Keycloak with Spring Boot provides a secure
                  authentication and authorization system.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
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
                </p>
              </div>
            </div>
          </a>

          <a
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href="https://rkisuru.hashnode.dev/beginners-guide-to-spring-boot"
            target="_blank"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1723919263455/cd714357-befe-4fa9-b30a-b7d9e98bfd51.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Beginner's Guide to Spring Boot
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Mastering Spring Boot: Fundamental Concepts and Project
                  Initialization
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
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
                </p>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Articles;
