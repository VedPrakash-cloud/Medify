import NavBar from './component/home';
import Hero from './component/hero';
import FindSpecialist from './component/Specialist';
import MedicalTeam from './component/MedicalTeam';
import SearchItem from './component/searchPage';
import SwiperCard from './component/swiper';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <SearchItem />
      <SwiperCard />
      <FindSpecialist />
      <MedicalTeam />
    </div>
  );
}

export default App;
