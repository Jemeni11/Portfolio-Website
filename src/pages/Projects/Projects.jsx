import "./projects.css";
import { PageTemplate, Quote, CardLikeButton } from "../../components";

import ShoppingApp from "../../assets/projects/shoppingapp/Cart.svg";
import AdviceGenerator from "../../assets/projects/advicegenerator/adviceGeneratorApp.svg";
import TipCalculator from "../../assets/projects/tipcalculator/tipCalculatorApp.svg";
import Splitter from "../../assets/projects/splitter/splitterScreenshot.svg";
import IPTracker from "../../assets/projects/ipaddresstracker/IPAddressTrackerScreenshot.svg";
import TodoApp from "../../assets/projects/todoapp/todoAppScreenshot.svg";
import ExpenseTracker from "../../assets/projects/expensetracker/expenseTrackerScreenshot.svg";
import RestCountriesAPI from "../../assets/projects/restcountriesapi/RestCountriesAPIScreenshot.png";

const projectsArray = [
  {
    id: "web",
    category: "Web Development",
    projects: [
      {
        id: "webproject_1",
        coverImage: ShoppingApp,
        imageBackground: "white",
        title: "Shopping App",
        description: (
          <p className="projectCardInfoDescription">
            A shopping web app built with React, Redux (ToolKit), React Router
            and Vite.
          </p>
        ),
        liveURL: "https://jemeni-react-redux-shopping-app.netlify.app/",
        sourceCodeURL: "https://github.com/Jemeni11/React-Redux-Shopping-App",
      },
      {
        id: "webproject_2",
        coverImage: RestCountriesAPI,
        imageBackground: "transparent",
        title: "Countries App",
        description: (
          <p className="projectCardInfoDescription">
            A website that pulls country data from the{" "}
            <a href="https://restcountries.com/">REST Countries API</a> and
            displays it.
          </p>
        ),
        liveURL: "https://jemeni-rest-countries.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/11-rest-countries-api",
      },
      {
        id: "webproject_3",
        coverImage: IPTracker,
        imageBackground: "#161d2b",
        title: "IP Address Tracker",
        description: (
          <p className="projectCardInfoDescription">
            An IP Address Tracker app built with the{" "}
            <a href="https://geo.ipify.org/">IP Geolocation API by IPify</a> for
            getting the user's location and{" "}
            <a href="https://leafletjs.com/">LeafletJS</a> to generate the map.
          </p>
        ),
        liveURL: "https://jemeni-ip-tracker.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/09-ip-address-tracker-main",
      },
      {
        id: "webproject_4",
        coverImage: TodoApp,
        imageBackground: "none",
        title: "Todo App",
        description: (
          <p className="projectCardInfoDescription">
            The classic todo app with a dark/light theme toggle.
          </p>
        ),
        liveURL: "https://jemeni-todo-app.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/10-todo-app-main",
      },
      {
        id: "webproject_5",
        coverImage: TipCalculator,
        imageBackground: "#C5E4E7",
        title: "Tip Calculator",
        description: (
          <p className="projectCardInfoDescription">
            A tip calculator app that helps to you calculate the tip and split
            the total bill between friends!
          </p>
        ),
        liveURL: "https://jemeni-tip-calculator.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/06-tip-calculator-app-main",
      },
      {
        id: "webproject_6",
        coverImage: AdviceGenerator,
        imageBackground: "#1F2632",
        title: "Advice Generator App",
        description: (
          <p className="projectCardInfoDescription">
            An advice generator app built using HTML, CSS, JS and the{" "}
            <a href="https://api.adviceslip.com/">Advice Slip API</a>.
          </p>
        ),
        liveURL: "https://jemeni-advice-generator.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/04-advice-generator-app-main",
      },
      {
        id: "webproject_7",
        coverImage: ExpenseTracker,
        imageBackground: "white",
        title: "Expense Tracker",
        description: (
          <p className="projectCardInfoDescription">
            A basic expense tracker made with HTML, CSS, JS and BootStrap4.
          </p>
        ),
        liveURL: "https://jemeni11.github.io/Expense-Tracker/",
        sourceCodeURL: "https://github.com/Jemeni11/Expense-Tracker",
      },
    ],
  },
  {
    id: "mobile",
    category: "Mobile App Development",
    projects: [
      {
        id: "mobileproject_1",
        coverImage: Splitter,
        imageBackground: "#161d2b",
        title: "Tip Calculator Mobile App (Splitter)",
        description: (
          <p className="projectCardInfoDescription">
            Splitter helps to you calculate the tip and split the total bill
            between friends! Use the{" "}
            <a href="https://expo.dev/client">Expo Go</a> app to open the live
            URL.
          </p>
        ),
        liveURL: "https://expo.dev/@jemeni11/tip-calculator",
        sourceCodeURL: "https://github.com/Jemeni11/Tip-Splitter-Mobile-App",
      },
    ],
  },
];

const ProjectSection = ({ title, projects }) => {
  return (
    <div className="projectSectionContainer">
      <p className="projectSectionTitle">{title}</p>
      <div className="projectSectionGrid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  coverImage,
  imageBackground,
  title,
  description,
  liveURL,
  sourceCodeURL,
}) => {
  return (
    <div className="projectCard">
      <div className="projectCardScreenShot">
        <img
          src={coverImage}
          alt={`A screenshot of a/an ${title}`}
          style={{ backgroundColor: imageBackground }}
        />
      </div>
      <div className="projectCardInfo">
        <p>{title}</p>
        {description}
        <div className="projectCardButtonsContainer">
          <CardLikeButton
            children={
              <a href={liveURL} target="_blank" referrerPolicy="no-referrer">
                Live URL
              </a>
            }
          />
          <CardLikeButton
            children={
              <a
                href={sourceCodeURL}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Source Code
              </a>
            }
          />
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <PageTemplate>
      <section className="pageSection">
        <h1 className="pageHeader1">My Projects</h1>
        <Quote
          citeLink="https://www.azquotes.com/quote/632647?ref=projects"
          quote="I see myself working, making a living and doing projects that I'm passionate about, regardless of the medium."
          author="Matt Bomer"
        />
        <div className="projectCardContainer">
          {projectsArray.map((projectObject) => (
            <ProjectSection
              key={projectObject.id}
              title={projectObject.category}
              projects={projectObject.projects}
            />
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}

export default Projects;
