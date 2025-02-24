function displayAffirmation(response) {
  console.log("Poem generated");
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a12670296b5b7ac064111tf40b315o03";
  let prompt = `User instructions: Generate a positive affirmation about ${instructionsInput.value}. Just the affirmation please.`;
  let context =
    "You are a positivity life coach and love to write positive affirmations. Your mission is to generate positive affirmations. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
