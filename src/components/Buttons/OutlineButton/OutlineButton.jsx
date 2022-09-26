import "./outlinebutton.css";

function OutlineButton({ text, onClick }) {
  return (
    <button className="outlineButton" onClick={onClick}>
      {text}
    </button>
  );
}

export default OutlineButton;
