import Copy from "../copy/Copy";
import CurrentTime from "../currentTime/CurrentTime";

const Footer = () => {
  return (
    <div className="absolute w-screen bottom-auto bg-[#f9f9f9] left-0 mt-16 font-light">
      <div className="max-w-7xl pt-8 px-4 mx-auto xl:py-8 mb-20 text-gray-500">
        <div className="flex flex-col-reverse md:flex-row justify-between">

          <div className="text-lg pt-4 sm:pt-0">
            <p></p>
            <p>Designed & Developed 💜 Beck</p>

            <p id="credit" className="md:w-72 pt-4 text-gray-500 dark:text-gray-900 pb-10">2023 © <span className="text-gray-900 font-normal"> Beck</span>&nbsp;&nbsp; All Rights Reserved. <br />
            
            This site was designed in&nbsp;
              <a href="https://www.figma.com/" className="text-sky-600" target="_blank" rel="noreferrer">Figma</a>,&nbsp;
        
              <a href="https://tailwindcss.com/" className="text-sky-600" target="_blank" rel="noreferrer">tailwindcss&nbsp;</a> 
        
                with a cup of&nbsp;
        
              <a href="https://react.dev/" className="text-sky-600" target="_blank" rel="noreferrer">react&nbsp;</a>
        
                &amp;&nbsp;deployed via
        
              <a href="https://www.vercel.com/" className="text-sky-600" target="_blank" rel="noreferrer"> Vercel</a>.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:space-x-24 font-base">
            <div className="pt-4 sm:pt-0">
              <ul className="text-lg space-y-2">
                <li className="hover:text-gray-900">
                  <a href="https://linkedin.com/in/kanno-beck">LinkedIn</a>
                </li>

                <li className="hover:text-gray-900">
                  <a href="https://dribbble.com/bekkr">Dribbble</a>
                </li>

                <li className="hover:text-gray-900">
                  <a href="https://github.com/altBeck">GitHub</a>
                </li>

                <li className="hover:text-gray-900">
                  <a href="https://read.cv/beck">Read.cv</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="pb-2">
                <p className="text-lg pb-2">Ping me via email @ <span className="font-normal text-black">drkannobeck@gmail.com</span></p>
                <Copy />
              </div>

              <div>
                <p className="text-lg pb-2">My Timezone <span className="font-normal text-black">GMT+1</span></p>
                <CurrentTime />
              </div>
            </div>
          </div>

        </div>


        <div></div>
      </div>
    </div>
  )
}

export default Footer