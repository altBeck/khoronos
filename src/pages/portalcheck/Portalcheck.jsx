import portalVideo from "/p-untltd.mp4";
import phead from "/images/h8ader-pc.png";

const Portalcheck = () => {
  return (
    <div className="py-28">
      {/* Header */}
      <div>
        <h1 className="xl:text-[100px] uppercase font-medium">portal check</h1>
        <p className="xl:text-3xl font-light">Web Design</p>

        <div className="w-96 flex space-x-2 text-sm font-light py-3">
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Wayaa</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">Product designer</p>
          <p className="px-3 py-2 border-[#D0D5DD] rounded-full border-[0.5px]">2023</p>
        </div>
      </div>


      <header className="pt-4 relative container">
        <img className="rounded w-full" src={phead} alt="Portal check header image"/>
      </header>


      <div className="py-4">
        <video className="rounded-md" autoPlay loop muted>
          <source src={portalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Portalcheck