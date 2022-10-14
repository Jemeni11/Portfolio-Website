import "./tools.css";
import {
  HTML,
  CSS3 as CSS,
  JavaScript,
  React,
  ReactRouter,
  Python,
  StyledComponents,
  Vite,
  Yarn,
  Expo,
  PyCharm,
  VSCode,
  Linux,
  Git,
} from "../../assets/icons";

function ToolsIUse() {
  const tools = [
    {
      title: "Python",
      imageURL: Python,
      toolUrl: "https://www.python.org/",
    },
    {
      title: "HTML5",
      imageURL: HTML,
      toolUrl: "https://html.spec.whatwg.org/",
      cssFilter:
        "invert(40%) sepia(32%) saturate(4909%) hue-rotate(348deg) brightness(93%) contrast(91%)",
    },
    {
      title: "CSS3",
      imageURL: CSS,
      toolUrl: "https://www.w3.org/TR/CSS/#css",
      cssFilter:
        "invert(32%) sepia(91%) saturate(1048%) hue-rotate(180deg) brightness(89%) contrast(89%)",
    },
    {
      title: "JavaScript",
      imageURL: JavaScript,
      toolUrl:
        "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
      cssFilter:
        "invert(90%) sepia(68%) saturate(4658%) hue-rotate(338deg) brightness(101%) contrast(94%)",
    },
    {
      title: "React",
      imageURL: React,
      toolUrl: "https://reactjs.org/",
      cssFilter:
        "invert(82%) sepia(29%) saturate(1452%) hue-rotate(163deg) brightness(100%) contrast(98%)",
    },
    {
      title: "React Router",
      imageURL: ReactRouter,
      toolUrl: "https://reactrouter.com/",
      cssFilter:
        "invert(42%) sepia(89%) saturate(466%) hue-rotate(309deg) brightness(77%) contrast(108%)",
    },
    {
      title: "Styled Components",
      imageURL: StyledComponents,
      toolUrl: "https://styled-components.com/",
      cssFilter:
        "invert(56%) sepia(6%) saturate(4510%) hue-rotate(288deg) brightness(95%) contrast(89%)",
    },
    {
      title: "Vite",
      imageURL: Vite,
      toolUrl: "https://vitejs.dev/",
      cssFilter:
        "invert(38%) sepia(45%) saturate(3017%) hue-rotate(223deg) brightness(102%) contrast(101%)",
    },
    {
      title: "Yarn",
      imageURL: Yarn,
      toolUrl: "https://yarnpkg.com/",
      cssFilter:
        "invert(46%) sepia(51%) saturate(649%) hue-rotate(154deg) brightness(95%) contrast(88%)",
    },
    {
      title: "React Native",
      imageURL: React,
      toolUrl: "https://reactnative.dev",
      cssFilter:
        "invert(82%) sepia(29%) saturate(1452%) hue-rotate(163deg) brightness(100%) contrast(98%)",
    },
    {
      title: "Expo",
      imageURL: Expo,
      toolUrl: "https://expo.dev/",
      cssFilter:
        "invert(7%) sepia(19%) saturate(4985%) hue-rotate(218deg) brightness(90%) contrast(118%)",
    },
    {
      title: "PyCharm",
      imageURL: PyCharm,
      toolUrl: "https://www.jetbrains.com/pycharm/",
      attribution:
        "Copyright © 2022 JetBrains s.r.o. PyCharm and the PyCharm logo are registered trademarks of JetBrains s.r.o.",
      cssFilter:
        "invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%)",
    },
    {
      title: "Visual Studio Code",
      imageURL: VSCode,
      toolUrl: "https://code.visualstudio.com/",
      cssFilter:
        "invert(31%) sepia(83%) saturate(1504%) hue-rotate(182deg) brightness(93%) contrast(101%)",
    },
    {
      title: "Linux",
      imageURL: Linux,
      toolUrl: "https://www.linux.org/",
      cssFilter:
        "invert(93%) sepia(15%) saturate(6670%) hue-rotate(338deg) brightness(105%) contrast(98%)",
    },
    {
      title: "Git",
      imageURL: Git,
      toolUrl: "https://git-scm.com/",
      cssFilter:
        "invert(30%) sepia(99%) saturate(1487%) hue-rotate(346deg) brightness(106%) contrast(88%)",
    },
  ];

  const iconStyle = {
    padding: "1rem",
    margin: "1rem",
    height: "6rem",
    width: "5rem",
  };

  return (
    <div className="toolsContainer">
      {tools.map((tool) => (
        <div key={tool.title} className="toolsIconTile">
          <img
            src={tool.imageURL}
            title={tool.attribution ? tool.attribution : tool.title}
            style={{
              ...(tool.cssFilter && { filter: tool.cssFilter }),
              ...iconStyle,
            }}
          />
          <p>
            <a href={tool.toolUrl} title="Official website" target="_blank">
              {tool.title}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ToolsIUse;
