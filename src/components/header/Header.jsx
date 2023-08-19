import arrow from "../../assets/arrow-up-right.svg";

const Header = () => {
  return (
    <div className="mx-auto pt-28 md:pt-40">
      <div className="text-center pb-4 md:pb-16">
        <div >
          <h1 className="uppercase text-4xl md:text-[86px] xl:text-[150px] font-semibold text-black md:my-[52px] xl:my-[86px]">
            beck kanno.
          </h1>
          <h1 className="uppercase text-4xl md:text-[86px] xl:text-[150px] font-semibold text-black md:my-[52px] xl:my-[86px]">
            user interface
          </h1>
          <h1 className="uppercase text-4xl md:text-[86px] xl:text-[150px] font-semibold text-black md:my-[52px] xl:my-[86px]">
            designer<span className="!lowercase">©</span>
          </h1>
        </div>
      </div>

      <button className="md:hidden flex mx-auto justify-center px-6 py-3 border-[0.5px] border-[#E1E0E5] rounded-[99px] shado">
        <span className="flex">
          <a className="flex" href="https://drive.google.com/file/d/1hdTlI_GiH2eEcHo0lvrMf6VbQp_0DCKh/view" target="_blank" rel="noopener noreferrer">Resume<img src={arrow} /></a>
        </span>
      </button>


      <div>
        <p className="text-3xl font-light">I specialize in a mix of visual/interaction design and front-end engineering — which allows me to translate ideas into functional prototypes and production-ready code with the full fidelity of the web.</p>
      </div>
    </div>

  )
}

export default Header