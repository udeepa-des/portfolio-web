import { BookOpenIcon, DocumentDownloadIcon, DocumentSearchIcon, DocumentTextIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Cv({ CvUrl, ClUrl }) {
    function handleCV() {
        const url = `${process.env.PUBLIC_URL}${CvUrl}`;
        window.open(url, '_blank');
    }

    function handleCL() {
        const url = `${process.env.PUBLIC_URL}${ClUrl}`;
        window.open(url, '_blank');
    }

    return (
        <section id="Cv">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <DocumentTextIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Documents
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Looking to learn more about my professional background and qualifications?
                        Please find below links to my CV and cover letter, providing a comprehensive overview of my skills, experience,
                        and achievements. I invite you to review these documents and learn more about my passion for software engineering.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <DocumentDownloadIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                                <button onClick={handleCV}>View Curriculum Vitae</button>
                            </span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <DocumentDownloadIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                                <button onClick={handleCL}>View Cover Letter</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

