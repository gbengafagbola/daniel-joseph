import Header from "../../components/header/header";
import Introduction from "../../components/introduction/introduction";
import Image from "../../components/image/image";
import FeaturedProject from "../../components/featured-project/featured-project";
import Footer from "../../components/footer/footer";

import './home.css';

function Home({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Introduction />
      <Image />
      <FeaturedProject />
      <Footer />
    </div>
  );
}

export default Home;
