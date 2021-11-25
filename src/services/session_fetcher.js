import { URL_API } from "../constants";

export async function loginUp(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(
    `${URL_API}/api/session`,
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => data.body);
}

export async function logOut() {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
    },
  };

  return fetch(
    `${URL_API}/api/session`,
    requestOptions
  )
    .then((res) => res.json());
}
