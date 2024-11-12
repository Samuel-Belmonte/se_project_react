import { baseUrl, processServerRequest } from "./api";

//function for registration
function signUp({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      avatar: avatar,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerRequest);
}

//function for authorization
function signIn({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerRequest);
}

export { signIn, signUp };
