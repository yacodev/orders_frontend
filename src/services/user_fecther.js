import { URL_API } from "../constants";

export async function createUser(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(
    `${URL_API}/api/user`,
    requestOptions
  ).then((res) => res.json());
}


