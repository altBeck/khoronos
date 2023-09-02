import { useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div className="p-3 xl:p-6 md:p-4 border-[#D0D5DD] border-[0.5px] rounded-xl shado overflow-hidden">
          <a href="/wayaa">
            <div className="rounded-lg border-[#D0D5DD] overflow-hidden border-[0.5px]">

            <img src="https://raw.githubusercontent.com/altBeck/img/main/rsz_waya.png" alt="Wayaa design system splash screen" loading="lazy" className={`transition-transform transform ${isHovered ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
            </div>
          </a>
          <div>
            <h1 className="text-2xl pt-4">Design System</h1>
            <p className="font-light text-[#475467]">Wayaa</p>
          </div>
        </div>
        <div className="bg-green-200 p-4">Item 2</div>
        <div className="bg-yellow-200 p-4">Item 3</div>
        <div className="bg-red-200 p-4">Item 4</div>
        <div className="bg-purple-200 p-4">Item 5</div>
        <div className="bg-pink-200 p-4">Item 6</div>
      </div>
    </div>
  )
}

export default Projects