import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="image" onClick={() => props.clickedFriend(props.id)}>
      <img className="col-2 card-1" alt={props.name} src={props.image} />
    </div>
  );
}

export default FriendCard;
