import "./card.css";

import heart from "../imgs/heart.png";
import send from "../imgs/send.png";
const Cards = (props) => {
  console.log(props.userData.PostImage);
  return (
    <>
      {props.userData.map((data, id) => {
        return (
          <div className="card-container" key={id}>
            <div className="top">
              <div className="top-left">
                <h3>{data.name}</h3>
                <p>{data.location}</p>
              </div>
              <div className="top-right">
                <h3>...</h3>
              </div>
            </div>
            <div className="mid">
              <img src={data.PostImage} alt="" />
            </div>
            <div className="bottom">
              <div className="bottom-left">
                <div className="icon">
                  <img src={heart} alt="" />
                  <img src={send} alt="" />
                </div>
                <div className="desc">
                  <span>{data.likes}</span>
                  <span><strong>{data.description}</strong></span>
                </div>
              </div>
              <div className="bottom-right">
                <p>{data.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Cards;
