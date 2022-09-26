import "./home.css";

export default function TextAnimation() {
  const slides = [
    "Frontend Developer",
    "ReactJS Developer",
    "React Native Developer",
    "Python Developer",
  ];
  return (
    <div className="container">
      <h1>Emmanuel Jemeni</h1>
      <div className="revealBox">
        {slides.map((slide, index) => {
          return (
            <div className="revealBoxItem" key={index}>
              <h2>{slide}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
