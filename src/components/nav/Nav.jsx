import Links from "../links/Links";
import arrow from "../../assets/arrow-up-right.svg";

const Nav = () => {
  return (
    <nav className="px-2 sm:px-4 py-5 fixed w-full z-20 top-0 left-0 border-gray-600 bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="m-0 pb-4 md:pb-0">
          <div>
            <h2 className="m-0 text-lg font-medium">User Interface Designer</h2>
            <p className="m-0 text-[#475467] font-light pb-4 md:pb-0">@ Port Harcourt, Nigeria – working globally</p>
          </div>
        </div>

        <div className="hidden md:flex">
          <Links />

          <button className="hidden md:flex justify-center px-6 py-3 border-[0.5px] border-[#E1E0E5] rounded-[99px] shado">
            <span className="flex">
              <a className="flex" href="https://drive.google.com/file/d/1hdTlI_GiH2eEcHo0lvrMf6VbQp_0DCKh/view" target="_blank" rel="noopener noreferrer">Resume<img src={arrow} /></a>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav