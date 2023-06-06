import './instructorCard.css'
import { BsLinkedin, BsGlobe } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const InstructorCard = ({ name, program, school, imageSrc, linkdenLink, emailLink, personalPortfolioLink }) => {

  return (
    <div className="instructor-card">
      <img className="instructor-image" src={imageSrc} alt={`Photo of ${name}`} />
      <div className="instructor-details">
        <h3 className="instructor-name">{name}</h3>
        <br />
        <b className="instructor-bio">{school}</b>
        <p className="instructor-bio">{program}</p>
        <div className="rowbox">
          {linkdenLink && <a href={linkdenLink} target="_blank" rel="noreferrer">
            <BsLinkedin size = {25} />
          </a>}
          {emailLink && <a href={emailLink}>
            <HiOutlineMail size = {25} />
          </a>}

          {personalPortfolioLink && <a href={personalPortfolioLink} target="_blank" rel="noreferrer">
            <BsGlobe size = {25}/>
          </a>
          }

        </div>

      </div>
    </div>
  );
};

export default InstructorCard;
