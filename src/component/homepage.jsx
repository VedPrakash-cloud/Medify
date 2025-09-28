import Hero from "./hero";
import FindSpecialist from "./Specialist";
import MedicalTeam from "./MedicalTeam";
import SearchItem from "./searchPage";
import SwiperCard from "./swiper";
import PatientCaring from "./PateintCaring";
import BlogsPost from "./blogs";
import HappyCustomer from "./customers";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchItem />
      <SwiperCard />
      <FindSpecialist />
      <MedicalTeam />
      <PatientCaring />
      <BlogsPost />
      <HappyCustomer />
    </div>
  );
}
