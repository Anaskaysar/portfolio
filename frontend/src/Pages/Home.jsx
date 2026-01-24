import Contact from "../components/Contact.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import Hero from "../components/Hero.jsx";
import PageTransition from "../components/PageTransition.jsx";
import WorkExperience from "../components/WorkExperience.jsx";

const Home = () => {
  return (
    <PageTransition>
      <div>
        <Hero />
        <FeaturedProjects />
        <WorkExperience />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Home;
