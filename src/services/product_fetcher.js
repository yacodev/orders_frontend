import { URL_API } from "../constants";

export async function getProducts() {

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
    },
  };

  return fetch(
    `${URL_API}/api/product`,
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => data.body);
}