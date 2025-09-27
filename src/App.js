import NavBar from './component/home';
import Hero from './component/hero';
import FindSpecialist from './component/Specialist';
import MedicalTeam from './component/MedicalTeam';
import SearchItem from './component/searchPage';
import SwiperCard from './component/swiper';
import PatientCaring from './component/PateintCaring';
import BlogsPost from './component/blogs';
import HappyCustomer from './component/customers';
import QNA from './component/AskQuestion';
import DownloadApp from './component/AppStore';
import Footer from './component/footer';
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
      <PatientCaring />
      <BlogsPost />
      <HappyCustomer />
      <QNA />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
