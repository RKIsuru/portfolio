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

const Skills = () => {
  return (
    <div>
      <h1 className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white text-center">
        Skills
      </h1>

      <div className="max-w-[85rem] px-4 pt-6 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
        <div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Creative minds
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We choose our teams carefully. Our people are the secret to
                  great work.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
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
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Effortless updates
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Benefit from automatic updates to all boards any time you need
                  to make a change to your website.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
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
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Strong empathy
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We've user tested our own process by shipping over 1k products
                  for clients.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
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
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Conquer the best
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We stay lean and help your product do one thing well.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Designing for people
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We actively pursue the right balance between functionality and
                  aesthetics, creating delightful experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
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
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  From boarding passes to movie tickets, there's pretty much
                  nothing you can't store with Preline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 pt-6 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="my-8 md:my-16 grid grid-cols-3 md:grid-cols-8 gap-6 sm:gap-x-12 lg:gap-x-20 justify-items-center">
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={spring} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={react} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={angular} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={docker} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={ii} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={vsCode} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={java} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={js} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={ts} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={html} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={css} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={bs} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={tw} />
          </a>

          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={msql} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={psql} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={kafka} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={aws} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={es} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={unity} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={vs} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={cSharp} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={ps} />
          </a>
          <a className="shrink-0 transition hover:-translate-y-1" href="#">
            <img className="size-10 mx-auto sm:mx-0" src={illus} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
