import "./contact.css";

function ContactCard({ image, title, url, attribution = "", onClick }) {
  return (
    <div onClick={onClick} className="contactCardContainer" title="Copy Link?">
      <div className="contactCardImageContainer">
        <img src={image} alt={title} title={attribution} />
      </div>
      <div className="contactCardTitleContainer">
        <p>
          <a href={url}>{title}</a>
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
