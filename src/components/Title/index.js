import React from "react";
import "./style.css";

const Title = props => {
  return (

    <div className="jumbotron text-center">
      <h1 className="display-4 text-center">Clicky Game</h1>
      <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
      <hr className="my-4" />
      <p className="result">{props.result}</p>
      <hr className="my-4" />
      <button type="button" className="btn btn-primary score">
        Score: <span className="badge badge-light">{props.currentScore}</span>
      </button>
      <button type="button" className="btn btn-primary top-score">
        Top Score: <span className="badge badge-light">{props.topScore}</span>
      </button>
    </div>

  )
}


export default Title;
