"use client"
import { useEffect } from 'react';
import { Events, Link } from 'react-scroll';

function NavBtn({ address, children, activePage, setActivePage }) {

  useEffect(() => {
    Events.scrollEvent.register('end', (to) => {
      setActivePage(to)
    });
  }, [])


  const handleSetActive = () => {
    setActivePage(address)
  }

  return (
    <Link to={address}
      onSetActive={handleSetActive}
      spy smooth duration={500} offset={-80}
      spyThrottle={500}
      className={`rounded-full select-none cursor-pointer px-4 py-2 flex flex-col items-center w-[25%] transition-all duration-300 z-20 ${activePage === address ? "text-primary" : "text-white"}`}>
      {children}
    </Link>
  )
}

export default NavBtn