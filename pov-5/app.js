const API_KEY = "sk-__";
// the sim
async function fetchImages() {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: "I want a photo of the industrial design of a PRP device",
      n: 2,
      size: "1024x1024",
    }),
  });
  const data = await response.json();
  console.log(data);
}
fetchImages();

