"use client"
import { Link } from 'react-scroll';

function NavBtn({ address, children, activePage, setActivePage }) {

  const handleSetActive = () => {
    setActivePage(address)
  }

  return (
    <Link to={address}
      onSetActive={handleSetActive}
      spy smooth="easeInOutQuint" duration={500} offset={address !== "contact" && -25}
      spyThrottle={500}
      className={`rounded-full  px-4 py-2 flex flex-col items-center w-[25%] transition-all duration-300 z-20 ${activePage === address ? "text-primary" : "text-white"}`}>
      {children}
    </Link>
  )
}

export default NavBtn