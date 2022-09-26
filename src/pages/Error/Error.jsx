import "./error.css";
import { PageTemplate, OutlineButton } from "../../components";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <div id="Error_Page">
        <h1>Hey oh!</h1>
        <h2>Looks like there's nothing here!</h2>
        <OutlineButton
          text="Back to the Home Page!"
          onClick={() => navigate("/")}
        />
      </div>
    </PageTemplate>
  );
}

export default Error;
