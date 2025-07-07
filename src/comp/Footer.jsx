import React from "react";
import Button from "./Button";

function Footer(params) {
    return (
        <footer className="h-[560px] bg-black flex flex-col justify-between items-center px-4">
            <div className="flex flex-col text-center items-center gap-10 pt-[100px]  xl:pt-[80px]">

                <div>
                    <h1 className="text-white text-[28px] sm:text-[32px] md:text-[40px] text-center max-w-[600px] mx-auto">
                        Subscribe to get notified about update
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base mt-2">
                        By subscribing with your mail, you will accept our privacy policy
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <input
                        className="w-[280px] sm:w-[380px] p-4 bg-[#161616] rounded-md text-white"
                        placeholder="Enter your email"
                        type="text"
                    />
                    <Button className="py-4 px-5 bg-orange-600 text-white rounded-md" title="Subscribe us" />
                </div>
            </div>

            <div className="w-full max-w-[1200px] flex justify-between  py-6 border-t border-gray-800 ">

                <div className="flex items-center gap-3">
                    <img src="/header_Logo.svg" alt="Logo" className="w-6 h-6" />
                    <h1 className="font-light text-white text-[20px]">Levyna</h1>
                </div>

                <div className="flex flex-wrap items-center gap-5 justify-center text-[16px]">
                    <a onClick={open} className="text-orange-500 hover:underline" href="#">Home</a>
                    <a onClick={open} className="text-white hover:underline" href="#">Service</a>
                    <a onClick={open} className="text-white hover:underline" href="#">Blog</a>
                    <a onClick={open} className="text-white hover:underline" href="#">About Us</a>
                    <a onClick={open} className="text-white hover:underline" href="#">Testimonial</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer