import Contact from "../components/Contact.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import Hero from "../components/Hero.jsx";
import WorkExperience from "../components/WorkExperience.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default Home;
