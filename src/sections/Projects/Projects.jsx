import React, { useState, useEffect } from "react";
import {
  fetchRepos,
  fetchStars,
  fetchCommitCount,
  fetchRepoLanguages,
} from "../../config/GithubApi";
import gitHub from "../../assets/github.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const reposData = await fetchRepos();
        const updatedRepos = await Promise.all(
          reposData.map(async (repo) => {
            const stars = await fetchStars(repo.name);
            const commitCount = await fetchCommitCount(repo.name);
            const languages = await fetchRepoLanguages(repo.name);
            return {
              ...repo,
              stars,
              commitCount,
              languages,
              description: repo.description || "No description available",
            };
          })
        );
        setRepos(updatedRepos);
      } catch (err) {
        setError("Failed to fetch repositories.");
      } finally {
        setLoading(false);
      }
    };
    loadRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="block text-3xl font-bold text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white text-center">
        Recent <span className="text-black">Projects</span>
      </h1>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid mx-auto w-96 sm:w-auto sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 transition hover:-translate-y-1"
            >
              <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
                <a href={repo.html_url} target="_blank">
                  <img src={gitHub} alt="cover image" />
                </a>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {repo.name}
                </h3>
                <div className="mx-5">
                  <div className="grid grid-cols-2">
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Commits:{"  "}
                      {repo.commitCount}
                    </p>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      {"  "}
                      {repo.stars}
                    </p>
                  </div>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    Languages:
                    {"  "}
                    {Object.keys(repo.languages).join(", ") ||
                      "No languages data available"}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href={repo.html_url}
                  target="_blank"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
