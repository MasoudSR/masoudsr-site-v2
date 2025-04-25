"use client"
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import { useState } from 'react';
import NavBtn from './modules/NavBtn';


function Navbar() {

    const [activePage, setActivePage] = useState("home")

    return (
        <div className='p-2 fixed top-0 w-full z-20 lg:right-0 lg:w-20 lg:top-[calc(50%-150px)]'>
            <div className="flex justify-between items-center bg-primary/60 backdrop-blur-lg rounded-full relative border-3 p-1 border-white shadow-sm lg:flex-col lg:gap-2 lg:px-8">
                <div className={`bg-white transition-all duration-300 shadow-sm w-[25%] lg:w-[56px] h-[53px] lg:h-[56px] rounded-full absolute left-1 top-1
                    ${activePage === "about" && "translate-x-[calc(100%-2px)] lg:translate-x-0 lg:translate-y-[calc(100%+4px)]"}
                    ${activePage === "projects" && "translate-x-[calc(200%-6px)] lg:translate-x-0 lg:translate-y-[calc(200%+10px)]"}
                    ${activePage === "contact" && "translate-x-[calc(300%-8px)] lg:translate-x-0 lg:translate-y-[calc(300%+12px)]"}
                    `}></div>
                <NavBtn address="home" activePage={activePage} setActivePage={setActivePage}>
                    <FiHome size={21} />
                    <span className="text-xs">Home</span>
                </NavBtn>
                <NavBtn address="about" activePage={activePage} setActivePage={setActivePage}>
                    <FiUser size={21} />
                    <span className="text-xs">About</span>
                </NavBtn>
                <NavBtn address="projects" activePage={activePage} setActivePage={setActivePage}>
                    <FiFolder size={21} />
                    <span className="text-xs">Projects</span>
                </NavBtn>
                <NavBtn address="contact" activePage={activePage} setActivePage={setActivePage}>
                    <FiMail size={21} />
                    <span className="text-xs">Contact</span>
                </NavBtn>
            </div>
        </div>
    )
}

export default Navbar