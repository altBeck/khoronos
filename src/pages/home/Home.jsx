import { Header, Projects } from '../../components';

const Home = () => {
  return (
    <div className="App">
      <div className="xl:pb-14">
        <Header />
      </div>

      <h1 className="sm:text-6xl md:text-[100px] uppercase text-center py-40 sm:py-0 xl:py-4 2xl:py-16">
        selected  
        <br className="sm:block hidden" /> 
         work
      </h1>
      
      <Projects />
    </div>
  )
}

export default Home