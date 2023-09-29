import left from "/assets/chevron-left.svg";
import profile from "/images/mk-profile.png";

const ME = () => {
  return (
    <div className="py-28">
      <div className="flex">
        <button className="pb-4"> 
          <a href="/" className="font-light">
            <img src={left}/>
          </a>
        </button>

        <h1 className="text-6xl xl:text-[84px] font-medium mx-auto">
          ABOUT ME
        </h1>
      </div>

      <div className="xl:pt-5">

        <div className="pt-4">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="relative">
              <img className="w-[60%] rounded-xl" src={profile}/>
            </div>

            <div className="flex-1 mt-5 lg:mt-0 w-full border rounded-md shado">
              <p className="text-lg md:text-xl font-light px-8 py-4">I&apos;m <b>Beck Kanno</b> – a self-taught Nigerian User Interface Designer working remotely. I&apos;m committed to delivering cool and impactful designs through strategic thinking and functional interactions.</p>

              <p className="text-lg md:text-xl font-light px-8">I&apos;m currently a Product Designer at <span className="hover_img"><a className="underline" href="https://www.breeze.africa/" target="_blank" rel="noopener noreferrer">Breeze<span></span></a>
              </span>, having previously led designs as a <b>User Interface Developer</b> at <span className="hover_img"><a className="underline" href="https://onlinecoursehost.com" target="_blank" rel="noopener noreferrer">OnlineCourseHost.Com<span></span></a></span>. On the side, I&apos;m working on <span className="hover_img"><a className="underline" href="https://onlinecoursehost.com" target="_blank" rel="noopener noreferrer">Portal Check<span></span></a></span>, a verification platform for university students.
              </p>

              <div className="px-8 py-4">
                <q className="text-xl font-light text-center">I specialize in a mix of visual/interaction design and front-end engineering — which allows me to translate ideas into functional prototypes and production-ready code with the full fidelity of the web.</q>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="">
        <h3 className="text-6xl xl:text-[84px] font-medium uppercase py-4">My design process</h3>

        <div className="grid grid-cols-3 gap-4 max-w-2xl">
          <div className="bg-blue-200 p-4">Item 1</div>
          <div className="bg-green-200 p-4">Item 2</div>
          <div className="bg-yellow-200 p-4">Item 3</div>
          <div className="bg-red-200 p-4 col-span-2">Item 4</div>
          <div className="bg-purple-200 p-4">Item 5</div>
        </div>
      </div>
    </div>
  )
}

export default ME