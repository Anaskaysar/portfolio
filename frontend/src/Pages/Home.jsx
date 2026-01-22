import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";

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
