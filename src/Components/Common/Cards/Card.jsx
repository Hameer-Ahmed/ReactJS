import { useNavigate } from "react-router";
import "./Card.css";

const Card = ({ person }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Card">
        <div
          className="cardImage"
          style={{ backgroundImage: `url(${person.background})` }}
        >
          <img src={person.profileImage} alt="" />
        </div>
        <div className="text">
          <h2>{person.name}</h2>
          <p>{person.profession}</p>
          <p>{person.description}</p>
        </div>

        <div className="link">
          <button onClick={() => navigate(person.id)}>Open</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
