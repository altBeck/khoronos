import mkone from "/images/rsz_waya.png";
import mktwo from "/images/portalLink.png";
import razr from "/images/RAZr.png";
const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto">

        {/* GRID #1: PORTAL CHECK */}
        <div className="p-3 xl:p-6 md:p-4 bg-white border-[#D0D5DD] border-[0.5px] rounded-xl shado overflow-hidden group">
          <a href="/portal-check">
            <div className="rounded-lg border-[#D0D5DD] overflow-hidden border-[0.5px]">

            <img src={mktwo} alt="Portal Check Website: Splash Screen" loading="lazy" className="transform scale-100 group-hover:scale-105 transition-transform w-full h-full"
            />
            </div>
          </a>
          <div>
            <h1 className="text-2xl pt-4">Portal Check</h1>
            <p className="font-light text-[#475467]">Identity verification platform, focused on streamlining student enrollment verification in Nigerian universities.</p>
          </div>
        </div>        


       {/* GRID #2: WAYAA */}
        <div className="p-3 xl:p-6 md:p-4 bg-white border-[#D0D5DD] border-[0.5px] rounded-xl shado overflow-hidden">
          <a href="/wayaa">
            <div className="rounded-lg border-[#D0D5DD] overflow-hidden border-[0.5px] group">

            <img src={mkone} alt="Wayaa Design System: Splash Screen" loading="lazy" className="transform scale-100 group-hover:scale-105 transition-transform w-full h-full"
            />
            </div>
          </a>
          <div>
            <h1 className="text-2xl pt-4">Wayaa</h1>
            <p className="font-light text-[#475467]">Design System</p>
          </div>
        </div>


       {/* GRID #3: RAZR STUDIO */}
       <div className="p-3 xl:p-6 md:p-4 bg-white border-[#D0D5DD] border-[0.5px] rounded-xl shado overflow-hidden group">
          <a href="/razr">
            <div className="rounded-lg border-[#D0D5DD] overflow-hidden border-[0.5px]">

            <img src={razr} alt="Razr Studio Website: Splash Screen" loading="lazy" className="transform scale-100 group-hover:scale-105 transition-transform w-full h-full"
            />
            </div>
          </a>
          <div>
            <h1 className="text-2xl pt-4">RAZr Studio</h1>
            <p className="font-light text-[#475467]">Product Design</p>
          </div>
        </div>

        
        <div className="bg-red-200 p-4">Item 4</div>
      </div>
    </div>
  )
}

export default Projects