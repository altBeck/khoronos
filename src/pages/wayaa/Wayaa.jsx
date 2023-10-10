import wayhead from "/images/header-wayaa.png";

const Wayaa = () => {
  return (
    <div className="py-28">
      <div>
        <h1 className="xl:text-[100px] uppercase font-medium">wayaa</h1>
        <p className="xl:text-3xl font-light">Design System</p>

        <div className="w-96 flex space-x-2 text-sm font-light py-3">
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Wayaa</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Product designer</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">2023</p>
        </div>
      </div>

      <section className="pt-4 relative container">
        <img className="rounded-md" src={wayhead} alt="Wayaa Header"/>

        <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
          <div className="max-w-md sm:p-4 pt-4 flex flex-col  space-y-6">
            <div>
              <h2 className="text-lg font-medium pb-1">My Role</h2>
              <p className="font-body">UXE — <span className="text-[#666]">UI & Interaction design, User flow optimization, Visual Design</span></p>
            </div>
            <div>
              <h2>Team</h2>
              <p className="font-body"><a className="text-[#666] hover:text-[#025DED]" href="https://www.linkedin.com/in/la-codist/" target="_blank" rel="noopener noreferrer">Bryan Ebeh</a> — SWE</p>
              <p className="font-body"><a className="text-[#666] hover:text-[#025DED]" href="https://www.linkedin.com/in/tonye-banigo-34260420b/" target="_blank" rel="noopener noreferrer">Tonye Banigo</a> — Brand Designer</p>
            </div>
            <div>
              <h2>Timeline & Status</h2>
              <p className="font-body">2 Months, <span className="text-[#666]">TBD 2023</span></p>
            </div>
          </div>
          <div className="sm:p-4 pt-4 flex flex-col">
            <h1 className="text-lg font-medium pb-1">Overview</h1>
            <p className="text-[#666] font-body pb-4 max-w-xl">Wayaa is a versatile fintech app redefining personal finance. It&apos;s more than just transactions; it&apos;s about understanding and reflecting your distinct financial habits. Combining multifunctional capabilities with a personalized touch, Wayaa empowers users to manage their money effectively. Its intuitive interface and tailored insights make it an invaluable tool for achieving financial goals, embodying a unique financial personality for every user</p>
          </div>
        </div>

        <div>
          <div>
            <h1>Problem Statement</h1>
            <p>The problem statement encapsulates the critical challenges in user onboarding, sign-in, card management, and customization features with precision. It astutely identifies pain points in the user experience journey, laying the groundwork for innovative design solutions. By addressing these key areas, Wayaa is poised to deliver a seamless and highly personalized fintech experience, setting a new standard for user-centric financial management</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wayaa