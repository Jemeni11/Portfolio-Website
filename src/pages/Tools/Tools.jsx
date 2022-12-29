import { PageTemplate, Quote } from "../../components";
import ToolsIUse from "./ToolsIUse";
import "./tools.css";

const Tools = () => {
  return (
    <PageTemplate>
      <section className="pageSection">
        <h1 className="pageHeader1">Tools I use</h1>
        <Quote
          citeLink="https://www.azquotes.com/quote/656524?ref=tools"
          quote="It is essential to have good tools, but it is also essential that the tools should be used in the right way."
          author="Wallace D. Wattles"
        />
        <ToolsIUse />
      </section>
    </PageTemplate>
  );
};

export default Tools;
