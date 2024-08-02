const baseUrl = "http://localhost:3001";

//make function processServerRequest that does the .then in a function

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function postItem(name, imageUrl, weather) {
  return (fetch(`${baseUrl}/items`),
  {
    method: "POST",
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
}

export { getItems, postItem };
