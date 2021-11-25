import { URL_API } from "../constants";

export async function createOrder(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(
    `${URL_API}/api/orders`,
    requestOptions
  ).then((res) => res.json());
}