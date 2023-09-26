import portalVideo from "/pc_untltd.mp4";
import phead from "/images/h8ader-pc.png";
import portal from "/images/portal.png";
import color from "/images/dsColor.png";

const Portalcheck = () => {
  return (
    <div className="py-28">
      {/* Header */}
      <div>
        <h1 className="xl:text-[100px] uppercase font-medium">portal check</h1>
        <p className="xl:text-3xl font-light">Web Design</p>

        <div className="w-96 flex space-x-2 text-sm font-light py-3">
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Portal Check</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Product designer</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">2023</p>
        </div>
      </div>

      <header className="pt-4 relative container">
        <img className="rounded-md w-full" src={phead} alt="Portal check header image"/>
      </header>

      <section className="flex flex-col md:flex-row justify-between md:py-12">

        <div className="max-w-md sm:p-4 pt-4 flex flex-col space-y-4">
          <div>
            <h2 className="text-lg font-medium">My Role</h2>
            <p className="font-body">UXE — <span className="text-[#666]">UI & Interaction design, User flow optimization, Visual Design</span></p>
          </div>
          <div>
            <h2>Team</h2>
            <p className="font-body"><a className="text-[#666] hover:text-[#025DED]" href="https://www.linkedin.com/in/prince-disi/" target="_blank" rel="noopener noreferrer">Prince Disi</a> — PM</p>
            <p className="font-body"><a className="text-[#666] hover:text-[#025DED]" href="https://www.linkedin.com/in/kingswill-wariboko-2283821b8/" target="_blank" rel="noopener noreferrer">Kingswill Wariboko</a> — SWE</p>
          </div>
          <div>
            <h2>Timeline & Status</h2>
            <p className="font-body">2 Months, <span className="text-[#666]">Launched in October 2023</span></p>
          </div>

        </div>

        <div className="max-w-lg sm:p-4 pt-4">
          
          <h1 className="text-lg font-medium">Overview</h1>
          <div className="text-[#666] text-base font-body">
            <p>
              Portal Check is an identity verification platform streamlining student enrollment verification in Nigerian universities, addressing inefficiencies, delays, and potential inaccuracies in the traditional verification process.
            </p>

            <p className="my-1">
              The platform tackles the challenges of manual paperwork, delays, and the risk of fraudulent academic credentials, benefiting educational institutions, students, and various stakeholders.
            </p>

            <p>
              I led the design efforts, creating the website, dashboard, design system, and demo page. My work ensures an intuitive and visually appealing user experience, addressing the critical need for efficient academic verification.
            </p>
          
          </div>
        </div>

      </section>


      <div className="py-4">
        <video className="rounded-md" autoPlay loop muted>
          <source src={portalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section>
          <div>
            <h1>Design System</h1>
          </div>
          <div>
            <img className="rounded-md" src={color} alt="portal check colors" />
            <div className="py-10"/>
          </div>
        </section>

        <div className="pt-4">
          <h1 className="">Final Design</h1>
          <p>Site can be visited <a className="text-[]" href="https://portal-check.vercel.app" target="_blank" rel="noopener noreferrer">here</a></p>
          <img className="rounded-md" src={portal} alt="Portal Check Website"/>
        </div>
      </div>
    </div>
  )
}

export default Portalcheck