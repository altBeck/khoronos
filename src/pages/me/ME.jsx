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
          <p className="text-2xl font-light">I&apos;m Beck Kanno – a self-taught Nigerian user interface designer working remotely. I&apos;m committed to delivering cool and impactful designs through strategic thinking and functional interactions.</p>

          <p className="text-2xl font-light pt-4">I&apos;m currently a Product Designer at <a className="underline" href="https://www.breeze.africa/" target="_blank" rel="noopener noreferrer">Breeze</a>, having previously led designs as a User Interface Developer at <a className="underline" href="https://onlinecoursehost.com" target="_blank" rel="noopener noreferrer">OnlineCourseHost.Com</a>. On the side, I&apos;m working on <a className="underline" href="https://portalcheck.vercel.app" target="_blank" rel="noopener noreferrer">Portal Check</a>, a verification platform for university students.</p>
        </div>
      </div>


      <div className="my-20 xl:my-24">
        <q className="text-3xl font-light text-center">I specialize in a mix of visual/interaction design and front-end engineering — which allows me to translate ideas into functional prototypes and production-ready code with the full fidelity of the web.</q>
      </div>

      <div className="xl:pt-32">
        <h3 className="xl:text-4xl">My design process</h3>
      </div>
    </div>
  )
}

export default ME