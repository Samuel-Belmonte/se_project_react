export const baseUrl = "http://localhost:3001";

//to insert into the then section
function processServerRequest(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

//render card function
function getItems() {
  return fetch(`${baseUrl}/items`).then(processServerRequest);
}

//add card function
function postItem({ name, link, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: link,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then(processServerRequest);
}

//delete card function
function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then(processServerRequest);
}

export { getItems, postItem, deleteItem, processServerRequest };
