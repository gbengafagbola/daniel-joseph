import Introduction from "../../components/introduction/introduction";
// import Image from "../../components/image/image";
import FeaturedProject from "../../components/featured-project/featured-project";
import Helmet from "react-helmet";

import './home.css';

function Home({darkMode}) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Helmet>
        <title>Daniel Joseph - Product Designer a Step Away</title>
        <meta
          name="description"
          content="Daniel Joseph, a Product Designer through curiosity, innovation and product strategy, creates enjoyable and intuitive user-centered design interfaces with an emphasis on visuals, interaction, design systems, and creative direction to aid accomplish business and user goals."
        />
      </Helmet>
      <Introduction />
      {/* <Image /> */}
      <FeaturedProject />
    </div>
  );
}

export default Home;
