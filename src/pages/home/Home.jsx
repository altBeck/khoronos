import { Header } from '../../components';

const Home = () => {
  return (
    <div className="App">
      <div className="xl:pb-48">
        <Header />
      </div>

      <h1 className="text-[100px] uppercase text-center">selected <br className="flex md:hidden" /> work</h1>
    </div>
  )
}

export default Home