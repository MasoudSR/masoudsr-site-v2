"use client"
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import { useState } from 'react';
import NavBtn from './modules/NavBtn';


function Navbar() {

    const [activePage, setActivePage] = useState("home")

    return (
        <div className={`p-2 fixed w-full z-20 lg:right-[50%] top-0 lg:top-3 lg:max-w-lg transition-all duration-300 ${activePage !== "home" && "translate-x-[50%]"}`}>
            <div className="flex justify-between items-center bg-primary/60 backdrop-blur-lg rounded-full relative border-3 p-1 border-white shadow-sm">
                <div className={`bg-white transition-all duration-300 shadow-sm w-[25%] h-[53px] rounded-full absolute left-1 top-1
                    ${activePage === "about" && "translate-x-[calc(100%-2px)]"}
                    ${activePage === "projects" && "translate-x-[calc(200%-6px)]"}
                    ${activePage === "contact" && "translate-x-[calc(300%-8px)]"}
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