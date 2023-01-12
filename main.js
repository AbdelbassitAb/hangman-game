let letters_array = Array.from("abcdefghijklmnopqrstuvwxyz");

let letters_div = document.querySelector(".letters");

letters_array.forEach((letter) => {
  let span = document.createElement("span");
  let text = document.createTextNode(letter);
  span.appendChild(text);
  span.className = "letter-box";
  letters_div.appendChild(span);
});

let obj = {
  drinks: ["cofee", "tea", "water", "coca cola", "pepsi"],
  colors: ["red", "green", "blue", "black", "purple", "yellow"],
  seasons: ["winter", "spring", "summer", "automn"],
  sports: [
    "football",
    "handball",
    "basketball",
    "golf",
    "swimming",
    "judo",
    "boxing",
  ],
  clubs: [
    "real madrid",
    "barcelona",
    "bayern munchen",
    "man city",
    "man united",
  ],
};

let categories = Object.keys(obj);

let selectedCategory =
  categories[Math.floor(Math.random() * categories.length)];

let categorieText = document.createTextNode(selectedCategory);

let span = document.querySelector(".header .category span");
span.appendChild(categorieText);

let selectedWords = obj[selectedCategory];

let selectedWord = Array.from(
  selectedWords[Math.floor(Math.random() * selectedWords.length)]
);

let wordDiv = document.querySelector(".word");

console.log(selectedWord);

selectedWord.forEach((letter) => {
  let span = document.createElement("span");
  //   let text = document.createTextNode(letter);
  //   span.appendChild(text);

  if (letter === " ") {
    span.className = "space";
  } else {
    span.className = "no-space";
  }

  wordDiv.appendChild(span);
});

let numberOfErrors = 0;
let numberOfCorrect = 0;

let errorSpan = document.querySelector(".errors span");
errorSpan.appendChild(document.createTextNode(numberOfErrors));

document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    let selectedLetter = e.target.innerHTML;
    let status = false;

    e.target.style.backgroundColor = "red";

    selectedWord.forEach((letter, index) => {
      if (selectedLetter === letter) {
        numberOfCorrect++;
        status = true;
        e.target.style.backgroundColor = "rgb(210, 210, 210)";
        let spans = document.querySelectorAll(".word span");
        let text = document.createTextNode(letter);
        spans[index].appendChild(text);
      }
    });

    if (status === false) {
      numberOfErrors++;
      errorSpan.innerHTML = numberOfErrors;
      console.log(numberOfErrors);
      switch (numberOfErrors) {
        case 1:
          document.querySelector(".base").style.display = "block";
          break;
        case 2:
          document.querySelector(".stand").style.display = "block";
          break;
        case 3:
          document.querySelector(".top-thing").style.display = "block";
          break;
        case 4:
          document.querySelector(".top-thing2").style.display = "block";
          break;
        case 5:
          document.querySelector(".hbal").style.display = "block";
          break;
        case 6:
          document.querySelector(".head").style.display = "block";
          break;
        case 7:
          document.querySelector(".body").style.display = "block";
          break;
        case 8:
          document.querySelector(".hands").style.display = "block";
          break;
        case 9:
          document.querySelector(".feet").style.display = "block";
          let gameOver = document.querySelector(".game-over");
          gameOver.style.display = "block";
          document.querySelector(".game-over .content").style.backgroundColor =
            "red";

          document.querySelector(".container").style.opacity = "0.3";

          document
            .querySelector(".game-over .content .you")
            .prepend(document.createTextNode("You lost"));
          document
            .querySelector(".game-over .content .the-word-is")
            .appendChild(
              document.createTextNode(`the word is "${selectedWord.join("")}"`)
            );

          break;
      }
      document.querySelector(".error-sound").play();
    } else {
      document.querySelector(".correct-sound").play();
      if (numberOfCorrect === selectedWord.length) {
        let gameOver = document.querySelector(".game-over");
        gameOver.style.display = "block";
        document.querySelector(".game-over .content").style.backgroundColor =
          "rgb(20, 115, 20)";
        document.querySelector(".container").style.opacity = "0.3";

        document
          .querySelector(".game-over .content .you")
          .prepend(document.createTextNode("You won"));
        document
          .querySelector(".game-over .content .the-word-is")
          .appendChild(
            document.createTextNode(`the word is "${selectedWord.join("")}"`)
          );
      }
    }
  }
});

document.querySelector("button").onclick = () => {
  window.location.reload();
};
