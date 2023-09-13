import { Button, Tooltip } from "flowbite-react";

import dbbbl from "/assets/Dribbble svg.svg";
import lknd from "/assets/LinkedIn svg.svg";
import mail from "/assets/mail.svg";
import arrow from "/assets/arrow-up-right.svg";

const Links = () => {
  return (
    <div className="flex">
      <div className="flex bg-[#FCFCFC] justify-between w-[150px] px-6 py-3 border-[0.5px] border-[#E1E0E5] rounded-[99px] shado mr-4">
        <Tooltip content="drkannobeck@gmail.com">
          <a href="mailto:drkannobeck@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="mail icon"/>
          </a>
        </Tooltip>

        <Tooltip content="linkedin.com/in/kanno-beck">
          <a href="https://linkedin.com/in/kanno-beck" target="_blank" rel="noopener noreferrer">
            <img src={lknd} alt="linkedin icon"/>
          </a>
        </Tooltip>

        <Tooltip content="dribbble.com/bekkr">
          <a href="https://dribbble.com/bekkr" target="_blank" rel="noopener noreferrer">
            <img src={dbbbl} alt="dribbble icon"/>
          </a>
        </Tooltip>
      </div>

      <Button className="md:hidden flex justify-center px-6 py-3 border-[0.5px] bg-[#FCFCFC] border-[#E1E0E5] rounded-[99px] shado">
        <span className="flex">
          <a className="flex" href="https://drive.google.com/file/d/1Mib_7O8Xvx5dfPU3F4d_hrO1xNfUgjGj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume<img src={arrow} alt="arrow-enter"/></a>
        </span>
      </Button>
    </div>  
  )
}

export default Links