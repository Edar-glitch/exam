import React, { useState } from "react";
import Button from "../comp/Button";
import Card from "../comp/Card";
import Section1 from "../comp/section_1";
import Section2 from "../comp/section_2";
import Section3 from "../comp/Section_3";
import Section_4 from "../comp/Section_4";
import Section5 from "../comp/Section_5";
import Footer from "../comp/Footer";
import { Link, NavLink } from 'react-router'
import Header from "./Header";




function Home() {

    return (
        <div className="relative w-full h-screen">

            <img src="/fon.svg" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />

            <div className="relative z-10  h-full  flex flex-col">

                <Header className="mt-[26px] flex justify-between items-center px-4 md:px-12 relative" />

                {/* <header className="mt-[26px] flex justify-between items-center px-4 md:px-12 relative">
                    <div className="flex items-center gap-2">
                        <img src="/header_Logo.svg" alt="Logo" />
                        <h1 className="font-light text-black text-[30px]">Levyna</h1>
                    </div>

                    <nav className=" gap-9 items-center hidden md:flex">
                        <a onClick={open} className="font-light text-orange-500 text-[18px]" href="#">Home</a>
                        <NavLink className={(status) => {
                            if (status.isActive) return 'text-blue-800'
                            return 'text-white-500'
                        }} to='/servise'>Service</NavLink>
                        <a onClick={serv}  href="#">Service</a>
                        <a onClick={open} className="font-light text-black text-[18px]" href="#">Blog</a>
                        <a onClick={open} className="font-light text-black text-[18px]" href="#">About Us</a>
                        <a onClick={open} className="font-light text-black text-[18px]" href="#">Testimonial</a>
                    </nav>


                    <div className="hidden md:block">
                        <Button className="py-[15px] px-[20px] bg-orange-500 text-white" title="Consultation" />
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[28px]">
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-50">
                            <a className="text-orange-500 text-[18px]" href="#">Home</a>
                            <a className="text-black text-[18px]" href="#">Service</a>
                            <a className="text-black text-[18px]" href="#">Blog</a>
                            <a className="text-black text-[18px]" href="#">About Us </a>
                            <a className="text-black text-[18px]" href="#">Testimonial</a>
                            <Button className="py-[12px] px-[20px] bg-orange-500 text-white w-full" title="Consultation" />
                        </div>
                    )}
                </header> */}

                <main >
                    <div className="mt-[120px] flex justify-start pl-4 md:pl-12 lg:pl-[100px]">
                        <div className="flex flex-col gap-5 text-start ">
                            <h1 className="relative font-semibol w-[350px] text-[38px] sm:w-[700px] sm:text-[48px] md:text-[48px] lg:text-[50px] xl:w-[703px] xl:text-[58px]  2xl:w-[703px] 2xl:text-[60px]">We are ready to help you in making your <span className="text-orange-500">Dream Home</span></h1>
                            {/* <img className="absolute left-[430px] top-[360px] md:" src="/line.svg" alt="" width={330} /> */}
                            <p className="font-light text-gray-500  sm:text-[20px] xl:w-[703px] xl:text-[25px]  2xl:w-[703px] 2xl:text-[28px]">We try to understand as best we can because of your desire to realize your dream home, of course with minimal costs but the best quality possible</p>
                            <Button className='border border-orange-500 pt-[20px] pb-[20px] pl-[25px] pr-[25px] text-orange-500' title={'Lets start building'} />
                        </div>
                    </div>
                </main>
            </div>

            <Section1 />

            <Section2 />

            <Section3 />

            <Section_4 />

            <Section5 />

            <Footer />

        </div>
    )
}

export default Home