import { DocumentTextIcon } from '@heroicons/react/solid';
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
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <span className="title-font font-medium text-white">
                                    <button onClick={handleCV}>View Curriculum Vitae</button>
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <span className="title-font font-medium text-white">
                                    <button onClick={handleCL}>View Cover Letter</button>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}

