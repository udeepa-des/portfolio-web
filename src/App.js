import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Cv from "./components/Cv";
import 'tailwindcss/tailwind.css';
import { useState } from "react";

export default function App() {
  const [CvUrl] = useState('./Udeepa desarana CV.pdf');
  const [ClUrl] = useState('./Udeepa Desarana Cover letter.pdf');

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Cv CvUrl={CvUrl} ClUrl={ClUrl} />
      <Testimonials />
      <Contact />
    </main>
  );
}