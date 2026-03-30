import MainHeaderSection from "../sections/MainHeaderSection/MainHeaderSection";
import AboutContent from "../components/molecules/AboutContent/AboutContent";
import JourneySection from "../sections/JourneySection/JourneySection";
 
import MainFooterSection from "../sections/MainFooterSection/MainFooterSection";

const About = () => {
  return (
    <>
      <MainHeaderSection/>
      <AboutContent />
      <JourneySection/>
      <MainFooterSection/>
    </>
  );
};

export default About;