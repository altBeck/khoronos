import { Header, Projects } from '../../components';

const Home = () => {
  return (
    <div className="App">
      <div className="xl:pb-14">
        <Header />
      </div>

      <Projects />
    </div>
  )
}

export default Home