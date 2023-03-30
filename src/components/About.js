import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Udeepa.
            <br className="hidden lg:inline-block" />Coding is a way of life.
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my portfolio! As a recent graduate with a BSc (Hons) in Information Technology specializing in Information Technology,
            I am excited to pursue a career in software engineering. With a passion for coding and a strong foundation in programming languages and software development methodologies,
            I am eager to apply my skills and knowledge to real-world projects. This portfolio showcases some of my best work and demonstrates my abilities as a software engineer.
            I am currently seeking an internship opportunity to further develop my skills and contribute to a dynamic team.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg duration-500">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg duration-500">
              See My Projects
            </a>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <a href="https://github.com/udeepa-des" class="ml-6 text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <a href="https://linkedin.com/in/udeepa" class="ml-6 text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path d="M20.25,18.75h-3.05v-4.25c0-1.02-.41-1.7-1.46-1.7s-1.94.67-1.94,2.12v3.82h-3.05v-7.5h3.05v1.27a3.37,3.37,0,0,1,3-1.67c2.16,0,3.75,1.42,3.75,4.31v3.59ZM6.75,18.75h-3v-7.5h3Zm-1.5-8.25a1.88,1.88,0,1,1,1.88-1.88A1.87,1.87,0,0,1,5.25,10.5ZM22.5,0H1.5A1.5,1.5,0,0,0,0,1.5V22.5A1.5,1.5,0,0,0,1.5,24H22.5A1.5,1.5,0,0,0,24,22.5V1.5A1.5,1.5,0,0,0,22.5,0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Code typing.gif"
          />
        </div>
      </div>
    </section >
  );
}