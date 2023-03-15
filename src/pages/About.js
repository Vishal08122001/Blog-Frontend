import React from 'react'

function contact() {
    return (
        <div
            name="contact"
            className="sm:pt-20 w-full  h-fit"
        >
            <div className="flex flex-col p-2 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8" >
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="text-gray-800 py-6 max-w-xxl">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/3b506296-d1e9-4a2e-ae73-06dd87fa0fb2"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                        />
                        <textarea
                            name="message"
                            style={{ resize: 'none' }}
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
                        ></textarea>

                        <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default contact








