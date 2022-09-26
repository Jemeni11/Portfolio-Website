import { PageTemplate, Quote } from "../../components";
import "./about.css";

const About = () => {
  return (
    <PageTemplate>
      <Quote
        citeLink="https://me.me/i/jesus-apolinaris-we-are-not-strangers-only-the-introduction-is-quote-8c1ebf3c825643b5b6160e655063c961"
        quote="We are not strangers, only the introduction is missing."
        author="Jesus Apolinaris"
      />
      <section>
        <h1 className="pageHeader1">About</h1>
        <div>
          <p>
            placeholder text
          </p>
        </div>
      </section>
    </PageTemplate>
  );
};

export default About;
