import left from "../../assets/chevron-left.svg";

const ME = () => {
  return (
    <div className="py-28">
      <button className="pb-4"> 
        <a href="/" className="font-light">
          <img src={left}/>
        </a>
      </button>
      <div className="xl:pt-5">
        <h1 className="text-6xl xl:text-[84px] font-medium">ABOUT ME</h1>

        <div className="pt-4">
          <p className="text-lg md:text-2xl font-light">I&apos;m Beck Kanno – a self-taught Nigerian user interface designer working remotely. I&apos;m committed to delivering cool and impactful designs through strategic thinking and functional interactions.</p>

          <p className="text-lg md:text-2xl font-light pt-4">I&apos;m currently a Product Designer at <span className="hover_img"><a className="underline" href="https://www.breeze.africa/" target="_blank" rel="noopener noreferrer">Breeze<span><img src="https://github.com/altBeck/img/blob/main/rsz_breeze-banner.png?raw=true" alt="image" height="100" /></span></a>
          </span>, having previously led designs as a User Interface Developer at <span className="hover_img"><a className="underline" href="https://onlinecoursehost.com" target="_blank" rel="noopener noreferrer">OnlineCourseHost.Com<span><img src="https://github.com/altBeck/img/blob/main/rsz_64e5d6d102999.png?raw=true" alt="image" height="100" /></span></a></span>. On the side, I&apos;m working on <span className="hover_img"><a className="underline" href="https://onlinecoursehost.com" target="_blank" rel="noopener noreferrer">Portal Check<span><img src="https://github.com/altBeck/img/blob/main/rsz_1main.png?raw=true" alt="image" height="100" /></span></a></span>, a verification platform for university students.
          </p>
        </div>
      </div>

      <div className="my-16">
        <q className="text-2xl md:text-3xl font-light text-center">I specialize in a mix of visual/interaction design and front-end engineering — which allows me to translate ideas into functional prototypes and production-ready code with the full fidelity of the web.</q>
      </div>

      <div className="">
        <h3 className="text-6xl xl:text-[84px] font-medium uppercase py-4">My design process</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-200 p-4">Item 1</div>
          <div className="bg-green-200 p-4">Item 2</div>
          <div className="bg-yellow-200 p-4">Item 3</div>
          <div className="bg-red-200 p-4">Item 4</div>
          <div className="bg-purple-200 p-4">Item 5</div>
          <div className="bg-pink-200 p-4">Item 6</div>
        </div>
      </div>
    </div>
  )
}

export default ME