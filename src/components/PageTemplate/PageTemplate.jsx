import { useSpring, animated } from "react-spring";
import "./pagetemplate.css";

const PageTemplate = ({ children }) => {
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: "1500" },
  });

  return (
    <animated.div style={styles} className="page">
      {children}
    </animated.div>
  );
};

export default PageTemplate;
