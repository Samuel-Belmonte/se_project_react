const baseUrl = "http://localhost:3001";

//make function processServerRequest that does the .then in a function

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };
