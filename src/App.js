import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Cv from "./components/Cv";
import 'tailwindcss/tailwind.css';
import { useState } from "react";

export default function App() {
  const [CvUrl] = useState('./Udeepa_desarana.pdf');
  const [ClUrl] = useState('./Cover Letter.pdf');

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Cv CvUrl={CvUrl} ClUrl={ClUrl} />
      <Testimonials />
      <Contact />
    </main>
  );
}