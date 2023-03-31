import React from "react";
import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto text-center">
                <div className="flex flex-col w-full mb-20">
                    <AcademicCapIcon className="mx-auto w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        Education
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Below is a summary of my academic qualifications, which have equipped me with the knowledge and skills to excel in this dynamic and rapidly-evolving industry.
                        I am proud of my educational achievements and eager to apply what I have learned to real-world challenges and opportunities.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto flex flex-wrap m-4">
                    {education.map((education) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <div className="block w-8 text-gray-500 mb-4 mx-auto">
                                    <BookOpenIcon />
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {education.degree}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {education.institute}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {education.year}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}