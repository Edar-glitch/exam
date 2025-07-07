import React from "react";
import Button from "../comp/Button";
import { Link, NavLink } from 'react-router'
import { useState } from "react";


function Header() {

    const open = () => {
        alert("еще не открыт")
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header className="mt-[26px] flex justify-between items-center px-4 md:px-12 relative">
                <div className="flex items-center gap-2">
                    <img src="/header_Logo.svg" alt="Logo" />
                    <h1 className="font-light text-black text-[30px]">Levyna</h1>
                </div>

                <nav className=" gap-9 items-center hidden md:flex">
                    <NavLink
                        className={({ isActive }) =>
                            `font-light text-black text-[18px] hover:text-orange-500 ${isActive ? 'text-blue-800' : 'text-white-500'
                            }`} to="/">Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `font-light text-black  text-[18px] hover:text-orange-500 ${isActive ? 'text-blue-800' : 'text-white-500'
                            }`} to="/servise">Service
                    </NavLink>

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
            </header>
        </div>
    )
}

export default Header