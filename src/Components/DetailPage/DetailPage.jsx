// import React from "react";
import { people } from "../../utils/CardsDetails/CardDetails";
import { useParams } from "react-router";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const targetData = people.find((item) => {
    return item.id == id;
  });
  console.log(targetData);
  return (
    <div>
      {targetData ? (
        <div className="DetailPage">
          <div className="imageSide">
            <img src={targetData.profileImage} alt="profileImage" />
          </div>
          <div className="textSide">
            <div className="name">
              <h1>{targetData.name}</h1>
            </div>
            <div className="designation">
              <h4>{targetData.profession}</h4>
            </div>
            <p>
              Hardworking and reliable UI/UXdesigner focused on going above and
              beyond to support teams and serve customers. Currently undergoing
              a self-taught process to enable me offer top-notch abilities.
              Motivated to continue to learn and grow as a product design
              professional.
            </p>
            <div className="icons">
              {/* <a href={targetData.profileLink}> */}
              <img src="/assets/images/facebook.png" />
              {/* </a> */}
              <img src="/assets/images/linkedin.png" />
              <img src="/assets/images/instagram.png" />
              <img src="/assets/images/twitter.png" />
            </div>

            <button>Buy me a coffee</button>
          </div>
        </div>
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
};

export default DetailPage;
