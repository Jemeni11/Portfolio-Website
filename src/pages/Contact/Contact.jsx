import ContactCard from "./ContactCard";
import { Quote, PageTemplate } from "../../components";
import "./contact.css";
import { Mail, LinkedIn, Twitter, Devto, Hashnode } from "../../assets/icons";

function Contact() {
  const socials = [
    {
      title: "Mail",
      url: "mailto:emmanueljemeni@gmail.com?subject=Contacting Emmanuel&body=Hey Emmanuel",
      image: Mail,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/emmanuel-jemeni-01858818b/",
      image: LinkedIn,
      attribution:
        "LinkedIn, the LinkedIn logo, the IN logo and InMail are registered trademarks or trademarks of LinkedIn Corporation and its affiliates in the United States and/or other countries.",
    },
    { title: "Twitter", url: "https://twitter.com/Jemeni11_", image: Twitter },
    { title: "Dev.to", url: "https://dev.to/jemeni11", image: Devto },
    {
      title: "Hashnode",
      url: "https://jemeni11.hashnode.dev",
      image: Hashnode,
    },
  ];
  const contactCardClickHandler = async (value) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(value);
    } else {
      throw new Error("Couldn't copy");
    }
  };
  return (
    <PageTemplate>
      <Quote
        author="Garrison Keillor"
        quote="Be well, do good work, and keep in touch."
        citeLink="https://quotefancy.com/quote/1011786/Garrison-Keillor-Be-well-do-good-work-and-keep-in-touch"
      />
      <section className="pageSection flex-container-align-center">
        <h1 className="pageHeader1">Contact Me</h1>
        <div className="socialsContainer">
          {socials.map((social, index) => (
            <ContactCard
              key={`${index}_${social.title}`}
              title={social.title}
              url={social.url}
              image={social.image}
              attribution={social.attribution}
              onClick={() =>
                contactCardClickHandler(social.url)
                  .then(() => alert("Copied"))
                  .catch(() => alert("Sorry! Could not copy!"))
              }
            />
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}

export default Contact;
