const API_KEY = "___";
async function fetchdata() {
  const respone = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4-turbo",
      messages: [
        { role: "user", content: "tell about scamper!" },
        { role: "user", content: "tell about 1w+1h!" },
      ],
      top_p: 1,
      temperature: 0.5,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });
  const data = await respone.json();
  console.log(data);
}
fetchdata();
