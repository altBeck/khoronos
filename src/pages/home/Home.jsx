import { Header, Projects } from '../../components';

const Home = () => {
  return (
    <div className="App ">
      <div className="xl:pb-14">
        <Header />
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-[100px] uppercase text-center pt-36 pb-8 sm:py-0 sm:pb-24 sm:pt-48  xl:py-4 2xl:py-16">
        selected  
        <br /> 
         work
      </h1>

      <Projects />
    </div>
  )
}

export default Home