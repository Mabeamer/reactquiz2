import React, { Component } from 'react';
import './App.css';


const initState = {
  words: [
    { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ],
  currentWord:"",
  userInput:"",
}

class App extends Component {
  constructor(){
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.startGameCard = this.startGameCard.bind(this);
    this.saveUserAnswer = this.saveUserAnswer.bind(this);
    this.checkUserAnswer = this.checkUserAnswer.bind(this);
    this.restForm = this.resetForm.bind(this);
    this.baseState = this.state;
  }

  resetForm(){
    this.setState(this.baseState)
  }
  handleChange(e) {
    e.preventDefault()
    var value = e.target.value;
    this.setState({value: e.target.value});
  }
  saveUserAnswer(e){
    let saveUserInput = e.target.value;
    this.setState({userInput: saveUserInput})
  }

  startGameCard(e){
    if(this.state.value === "English"){
        this.setState({
          currentWord:this.state.words[0].en
        });
    }
    if(this.state.value === "German"){
      this.setState({
        currentWord:this.state.words[0].de
      });
    }
    if(this.state.value === "French"){
      this.setState({
        currentWord:this.state.words[0].fr
      });
    }
    if(this.state.value === "Spanish"){
      this.setState({
        currentWord:this.state.words[0].sp
      });
    }
  }
    
  checkUserAnswer(){
      if(this.state.saveUserAnswer = this.state.currentWord){
        alert("Correct!");

      } else{
        alert("Wrong!");
      }
    }

  render() {
    return (
      <div className="App">
        <h1>Study App</h1>
        <p>What Language would you like your cards to be?</p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option> -- </option>
          <option>English</option>
          <option>German</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
        <p>What Language are you translating to?</p>
        <select>
          <option> -- </option>
          <option>English</option>
          <option>German</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
        <button onClick ={this.startGameCard}> Start Game </button> <button onClick={this.resetForm}>Reset</button>
        <p>{this.state.currentWord}</p> <input type="text" name="submit" onChange={this.saveUserAnswer} /> <button onClick={this.checkUserAnswer}>Submit</button>
      </div>
    );
  }
}

export default App;
