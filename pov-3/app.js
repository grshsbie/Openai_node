const API_KEY = "___";
const submitBuutom = document.querySelector("#submit");
const outputElement = document.querySelector("#output");
const inputelement = document.querySelector("input");
const historyElement = document.querySelector(".history");
const buttonElement = document.querySelector("button");

function changeInput(value) {
  const inputelement = document.querySelector("input");
  inputelement.value = value;
}

async function getmessage() {
  console.log("clicked");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: inputelement.value,
        },
      ],
      max_tokens: 520,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
    outputElement.textContent = data.choices[0].message.content;
    if (data.choices[0].message.content && inputelement.value) {
      const pElement = document.createElement("p");
      pElement.textContent = inputelement.value;
      pElement.addEventListener("click", () =>
        changeInput(pElement.textContent)
      );
      historyElement.append(pElement);
    }
  } catch (error) {
    console.error(error);
  }
}
submitBuutom.addEventListener("click", getmessage);

function clearInput() {
  inputelement.value = "";
}

buttonElement.addEventListener("click", clearInput);
