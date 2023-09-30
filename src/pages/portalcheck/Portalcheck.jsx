import portalVideo from "/video/pc_untltd.mp4";
import demo from "/video/demo.mp4";
import phead from "/images/h8ader-pc.png";
import portal from "/images/portal.png";
import color from "/images/dsColor.png";
import typo from "/images/dsTypography.png";
import students from "/images/students.png";

const Portalcheck = () => {
  return (
    <div className="pt-28">
      {/* Header */}
      <div>
        <h1 className="xl:text-[100px] uppercase font-medium">portal check</h1>
        <p className="xl:text-3xl font-light">Product Design</p>

        <div className="w-96 flex space-x-2 text-sm font-light py-3">
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Portal Check</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Product Designer</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">2023</p>
        </div>
      </div>

      <header className="pt-4 relative container">
        <img className="rounded-md w-full" src={phead} alt="Portal check header image"/>
      </header>

      <section className="flex flex-col md:flex-row justify-between md:py-12 space-y-6 sm:space-y-0">

        <div className="max-w-md sm:p-4 pt-4 flex flex-col  space-y-6">
          <div>
            <h2 className="text-lg font-medium pb-1">My Role</h2>
            <p className="font-body">UXE — <span className="text-[#666]">UI & Interaction design, User flow optimization, Visual Design</span></p>
          </div>
          <div>
            <h2>Team</h2>
            <p className="font-body"><a className="text-[#666] hover:text-[#025DED]" href="https://www.linkedin.com/in/prince-disi/" target="_blank" rel="noopener noreferrer">Prince Disi</a> — PM</p>
            <p className="font-body"><a className="text-[#666] hover:text-[#025DED]" href="https://www.linkedin.com/in/kingswill-wariboko-2283821b8/" target="_blank" rel="noopener noreferrer">Kingswill Wariboko</a> — SWE</p>
          </div>
          <div>
            <h2>Timeline & Status</h2>
            <p className="font-body">2 Months, <span className="text-[#666]">TBD 2023</span></p>
          </div>

        </div>

        <div className="max-w-lg sm:p-4 pt-4">
          
          <h1 className="text-lg font-medium pb-1">Overview</h1>
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
        <video className="rounded-md py-4 sm:py-0" autoPlay loop muted>
          <source src={portalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section>
          <div className="flex flex-col md:flex-row gap-x-10 justify-between pb-6 md:py-12 space-y-6 sm:space-y-0">
            <div className="max-w-lg">
              <h1 className="text-lg font-medium pb-1">Problem Statement</h1>
              <p className="text-[#666] font-body">In the context of student enrollment verification in Nigerian universities, the existing process is marred by inefficiencies, manual paperwork, and the potential for inaccurate or fraudulent academic credentials. This leads to delays, administrative burdens, and risks in verification. 
              </p>  
              <p className="text-[#666] font-body mt-1">
                Portal Check offers a streamlined, technology-driven solution for swift and accurate academic data authentication, benefiting institutions, students, employers, and stakeholders.
              </p>
            </div>
            <div className="max-w-lg">
              <h1 className="text-lg font-medium pb-1">Design System</h1>
              <p className="text-[#666] font-body">I spearheaded the development of Portal Check&apos;s design system, a crucial step. This system ensures a uniform user experience, building trust in our brand. I streamlined development, making it adaptable for future growth. 
              </p>
              
              <p className="text-[#666] font-body mt-1">
              By incorporating accessibility and user-centric design, it became a versatile and collaborative tool. I carefully defined guidelines for typography, color schemes, and UI elements, offering a structured framework for scalable, user-friendly, and visually appealing design.</p>
            </div>
          </div>

          <div>
            <img className="rounded-md" src={color} alt="portal check colors" />
            <div className="py-2"/>
            <img className="rounded-md" src={typo} alt="portal check typography" />
            <div className="py-5"/>
          </div>
        </section>

        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
            <h1 className="text-lg font-medium pb-1">Homepage</h1>
            <div>
              <p className="text-[#666] font-body pb-4 max-w-xl">Portal Check&apos;s homepage design brilliantly communicates its value with a clean, intuitive layout. Key features and calls-to-action are strategically placed, guiding users seamlessly. The professional color scheme and imagery inspire trust and confidence. Overall, the design invites exploration.</p>
              <button className="bg-[#0053D6] text-white px-5 py-3 rounded-md"><a className="text-[]" href="https://portal-check.vercel.app" target="_blank" rel="noopener noreferrer">Live site</a></button>
            </div>
          </div>
          <img className="rounded-md" src={portal} alt="Portal Check Website"/>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
          <h1 className="text-lg font-medium pb-1">Portal Check Demo</h1>

          <div>
            <p className="text-[#666] font-body pb-4 max-w-xl">Portal Check&apos;s demo page provides a hands-on, user-friendly introduction to the platform&apos;s key features. It offers a practical experience, showcasing how Portal Check addresses specific needs and serves as a powerful marketing tool. Additionally, it serves as an educational resource, guiding users on effective navigation and utilization of Portal Check.
            </p>  

            <div className="flex space-x-4">
              <button className="bg-[#0053D6] text-white px-5 py-3 rounded-md">
                <a href="https://www.figma.com/proto/87krT8M5VFyXar0TF6Yt4P/Portal-Check?type=design&node-id=1415-1295&t=ShJPuyPjU6l4QUrT-0&scaling=min-zoom&page-id=627%3A90&starting-point-node-id=1415%3A1295" target="_blank" rel="noopener noreferrer">View prototype</a>
              </button>

              <button className="border-[#0053D6] hover:border-[#025DED] hover:bg-[#025DED] border hover:text-white text-[#0053D6] px-5 py-3 rounded-md">
                <a href="#">Live site</a>
              </button>
            </div>
          </div>

          
        </div>

        <video className="rounded-md" autoPlay loop muted>
          <source className="container" src={demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
            <h1 className="text-lg font-medium pb-1">Coming Soon...</h1>
            <p className="text-[#666] font-body pb-4 max-w-xl">
            Here&apos;s a sneak peek of our evolving dashboard, offering a comprehensive view of student data—school, course, current level, institution and more exciting features to come. This powerful tool is designed to assist institutions in streamlining their enrollment verification process, ensuring accuracy and efficiency in managing academic records.
            </p>
          </div>
          <img className="rounded-md" src={students} alt="portal check dashboard" />
        </div>


        <div className="flex flex-col md:flex-row justify-between py-6 md:pt-12">
          <h1 className="text-lg font-medium pb-1">Conclusion</h1>
          <p className="text-[#666] font-body max-w-xl">In creating Portal Check, I&apos;ve learned the importance of clear, intuitive user guidance and the significance of showcasing the platform&apos;s standout features. As the project&apos;s demo recently launched, results from the demo&apos;s launch will be shared after a period of assessment and gathering feedback for further refinement. This iterative process ensures that the demo page continues to effectively serve its purpose in providing users with a compelling and informative experience of Portal Check&apos;s capabilities.</p>
        </div>

      </div>
    </div>
  )
}

export default Portalcheck