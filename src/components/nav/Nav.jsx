import Links from "../links/Links";
import arrow from "/assets/arrow-up-right.svg";

const Nav = () => {
  return (
    <nav className="px-2 py-4 sm:px-4 sm:py-5 fixed w-full z-20 top-0 left-0 border-gray-600 bg-gradient-to-br from-transparent via-white to-transparent backdrop-filter backdrop-blur-md">
      <div className="container flex flex-wrap justify-between items-center mx-auto">

        <div className="m-0 md:pb-0">
          <div>
            <h2 className="m-0 text-lg font-medium">User Interface Designer</h2>
            <p className="flex items-center m-0 text-[#475467] font-light md:pb-0 space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Available for work</span>
            </p>
          </div>
        </div>

        <button className="hidden md:block">
          <a href="/">
            <div className="w-4 h-4 rounded-full bg-blue-gradient"/>
          </a>
        </button>

        <div className="hidden md:flex">
          <Links />

          <button className="hidden md:flex justify-center bg-[#FCFCFC] px-6 py-3 border-[0.5px] border-[#E1E0E5] rounded-[99px] shado">
            <span className="flex">
              <a className="flex" href="https://drive.google.com/file/d/1hdTlI_GiH2eEcHo0lvrMf6VbQp_0DCKh/view" target="_blank" rel="noopener noreferrer">Resume<img src={arrow} alt="arrow-enter"/></a>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav