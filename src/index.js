function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("#affirmation", {
    strings: ["Affirmation will go here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
