import React from "react";
import spring from "../../assets/spring-icon.svg";
import angular from "../../assets/angular-icon.svg";
import react from "../../assets/react.svg";
import illus from "../../assets/adobe-illustrator.svg";
import ps from "../../assets/adobe-photoshop.svg";
import aws from "../../assets/aws.svg";
import bs from "../../assets/bootstrap.svg";
import cSharp from "../../assets/c-sharp.svg";
import css from "../../assets/css-3.svg";
import docker from "../../assets/docker-icon.svg";
import es from "../../assets/elasticsearch.svg";
import html from "../../assets/html-5.svg";
import ii from "../../assets/intellij-idea.svg";
import java from "../../assets/java.svg";
import vs from "../../assets/visual-studio.svg";
import vsCode from "../../assets/visual-studio-code.svg";
import unity from "../../assets/unity.svg";
import ts from "../../assets/typescript-icon.svg";
import tw from "../../assets/tailwindcss-icon.svg";
import psql from "../../assets/postgresql.svg";
import msql from "../../assets/mysql-icon.svg";
import kafka from "../../assets/kafka-icon.svg";
import js from "../../assets/javascript.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCogs,
  faDatabase,
  faMobile,
  faMobileAlt,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="pt-28 w-screen" id="skills">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white text-center"
      >
        Skills
      </motion.h1>

      <div className="mt-16 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid md:grid-cols-3 gap-y-4 md:gap-6 lg:gap-12">
            <div className="text-white flex gap-x-5 sm:gap-x-8">
              <FontAwesomeIcon icon={faMobileAlt} size="2xl" />
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Building fully responsive UIs
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Craft visually engaging interfaces that adapt seamlessly to
                  all devices, enhancing the user experience across screens.
                </p>
              </div>
            </div>

            <div className="text-white flex gap-x-5 sm:gap-x-8">
              <FontAwesomeIcon icon={faCogs} size="2xl" />
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Microservices architecture
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Design modular services that improve scalability,
                  maintainability, and system flexibility.
                </p>
              </div>
            </div>

            <div className="text-white flex gap-x-5 sm:gap-x-8">
              <FontAwesomeIcon icon={faBolt} size="2xl" />
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  API development and integration
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Create and integrate powerful APIs that allow smooth data flow
                  between systems and third-party platforms.
                </p>
              </div>
            </div>

            <div className="text-white flex gap-x-5 sm:gap-x-8">
              <FontAwesomeIcon icon={faDocker} size="2xl" />
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Containerization with Docker
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Deploy consistent environments for your apps, from development
                  to production, using containerization technologies.
                </p>
              </div>
            </div>

            <div className="text-white flex gap-x-5 sm:gap-x-8">
              <FontAwesomeIcon icon={faRepeat} size="2xl" />
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Automated CI/CD pipelines
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Optimize the deployment process through automation, ensuring
                  continuous integration and delivery of updates.
                </p>
              </div>
            </div>

            <div className="text-white flex gap-x-5 sm:gap-x-8">
              <FontAwesomeIcon icon={faDatabase} size="2xl" />
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Database design and optimization
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Develop efficient database schemas and optimize queries for
                  fast, scalable, and reliable performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[85rem] px-4 pt-6 sm:px-6 lg:px-8 lg:py-14 mx-auto overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.5 }}
          className="my-8 md:my-16 grid grid-cols-3 md:grid-cols-8 gap-6 sm:gap-x-12 lg:gap-x-20 justify-items-center"
        >
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={spring}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={react}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={angular}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={docker}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={ii}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={vsCode}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={java}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={js}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={ts}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={html}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={css}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={bs}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={tw}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={msql}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={psql}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={aws}
            />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={unity}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={vs}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={cSharp}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={ps}
            />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="size-10 mx-auto sm:mx-0"
              src={illus}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
