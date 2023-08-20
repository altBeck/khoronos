const NavBar = () => {
  return (
    <nav className="my-4 xl:my-8 fixed bottom-0 z-50  -translate-x-1/2 px-6 py-3 border-[0.5px] border-[#E1E0E5] rounded-[99px] shado left-1/2 bg-[#fcfcfc]">
      <ul className="flex space-x-4 items-center justify-center">
        <li>
          <button className="block">
            <a href="/">
              <div className="w-4 h-4 rounded-full bg-blue-gradient"/>
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="/work">
              Work
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="/me">About</a>
          </button>
        </li>
        <li>
          <button>
            <a href="/archive">Archive</a>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar