import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="image col-2" onClick={() => props.clickedFriend(props.id)}>
      <img className="card-1" alt={props.name} src={props.image} />
    </div>
  );
}

export default FriendCard;
