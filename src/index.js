function displayAffirmation(response) {
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
  let prompt = `User instructions: Generate three different positive affirmations about ${instructionsInput.value}. Only include the affirmations as sentences, no numbers or bullet points please.`;
  let context =
    "You are a positivity life coach and love to write positive affirmations. Your mission is to generate positive affirmations. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let affirmationElement = document.querySelector("#affirmation");
  affirmationElement.classList.remove("hidden");
  affirmationElement.innerHTML = `<div class ="generating">Generating positive affirmations for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
