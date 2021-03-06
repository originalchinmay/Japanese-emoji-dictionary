import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π": "Here",
  "ποΈ": "Service Charge",
  "π·οΈ": "Monthly Amount",
  "π―": "Reserved",
  "π": "Bargain",
  "πΉ": "Discount",
  "π": "Free of Charge",
  "π²": "Prohibited",
  "π": "Acceptable",
  "πΈ": "Application",
  "π΄": "Passing grade",
  "π³": "Vacancy",
  "π΅": "No Vacancy",
  "γοΈ": "Congratulations",
  "γοΈ": "Secret",
  "πΊ": "Open for business"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Translation will happen here");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not found in our database! Sorry :(";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  // function inputChangeHandler(event) {
  //   console.log(event.target.value);
  //   setUserInput(event.target.value);
  // }

  return (
    <div className="App">
      <h1>Japanese Emoji DecoderππΎ</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter Japanese emoji from keyboard OR click below"
      ></input>

      <div
        style={{
          fontSize: "1.3rem",
          padding: "2rem",
          fontWeight: "bold",
          color: "#a963ff"
        }}
      >
        {" "}
        {meaning}{" "}
      </div>

      <h3> List of available emojis </h3>

      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "3rem",
              padding: "0.3rem 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
