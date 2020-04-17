import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";

const shuffleArray = (array) => {
 
  let lengthOfArray = array.length;
  // While there are elements in the array
  while (lengthOfArray > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * lengthOfArray);
      // Decrease length by 1
      lengthOfArray--;
      // And swap the last element with it
      let temp = array[lengthOfArray];
      array[lengthOfArray] = array[index];
      array[index] = temp;
  }
  return array;
};

class App extends Component {

  // When a image gets clicked,
  // increase points and add the id of element to array.
  clickedFriend = (id) => {
    console.log(`Picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      })
    } else {
      this.resetGame();
    }
  };

    // When the user clicks an image, increment by 1
  // and check if the user has won
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    console.log(`the score is ${score}`);
    if (score === this.state.friends.length) {
      this.setState({
        result: "You win! Start clicking to play again!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        friends,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "Correct! New high score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "Correct!"
      });
    }
    this.resetFriendArray();
  }
  
  // reset the game when the user chooses a duplicate
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore:0,
      topScore: this.state.topScore,
      result: "You Lose! click a card to start over",
      gameOver: true,
      clicked: [],
      friends,
    });
    console.log('Game over? ', this.state.gameOver);
    this.resetFriendArray();
  }

  
  // set the array to a new scrambled version using shuffle algorithm
  resetFriendArray = () => {
    let newArray = shuffleArray(friends);
    this.setState({friends: newArray})
  }


  // Setting this.state.friends to the friends json array
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    friends,
    gameFinished: false
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container"> 
        <Jumbotron topScore={this.state.topScore} currentScore={this.state.currentScore} result={this.state.result}/>
       <div className="row">
        {this.state.friends.map(friend => (
          <FriendCard
            clickedFriend={this.clickedFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
        </div>
      </div> 
    );
  }
}

export default App;
