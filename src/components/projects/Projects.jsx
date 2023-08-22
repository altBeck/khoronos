import wayaa from "/project/rsz_1rsz_1waya.png";

const Projects = () => {
  return (
    <div>
      <h1 className="sm:text-6xl md:text-[100px] uppercase text-center py-40 sm:py-0 xl:py-4 2xl:py-16">
        selected  
        <br className="sm:block hidden" /> 
         work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div className="p-3 xl:p-6 md:p-4 border-[#D0D5DD] border-[0.5px] rounded-xl shado">
          <a href="/wayaa">
            <img src={wayaa} alt="Wayaa design system splash screen" loading="lazy" className="w-full h-auto rounded-lg border-[#D0D5DD] border-[0.5px]" />
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