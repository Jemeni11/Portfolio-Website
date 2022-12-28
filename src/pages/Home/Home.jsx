import { PageTemplate, OutlineButton } from "../../components";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <section className="pageSection homePageSection">
        <div className="homeTextContainer">
          <h1 className="title">Emmanuel Jemeni</h1>
          <h2 className="subTitle textColorTickleMePink">
            Front-End Web Developer
          </h2>
          <OutlineButton text="About Me" onClick={() => navigate("/about")} />
        </div>
      </section>
    </PageTemplate>
  );
}

export default Home;
