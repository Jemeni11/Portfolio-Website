import { PageTemplate } from "../../components";
import "./home.css";

function Home() {
  return (
    <PageTemplate>
      <section className="pageSection homePageSection">
        <div className="homeTextContainer">
          <h1 className="pageHeader1">Emmanuel Jemeni</h1>
          <h2 className="textColorTickleMePink">Front End Web Developer</h2>
          <p>I create wonders on the web</p>
        </div>
        <div className="animationContainer">
          <p>placeholder text</p>
        </div>
      </section>
    </PageTemplate>
  );
}

export default Home;
