import { Projects } from "../../components";

const Work = () => {
  return (
    <div className="pt-28 md:pt-40">
      <div>
        <h1 className="text-6xl xl:text-[84px] font-medium">Work</h1>
        <p>Case studies, web and mobile apps.</p>
      </div>

      <div>
        <Projects />
      </div>
      
    </div>
  )
}

export default Work