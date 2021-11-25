/* import axios from "axios";


const api = 'https://orders-carlos.herokuapp.com/api/product'; 
const token = sessionStorage.getItem('token');

export const getProducts = axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
.then(res => {
console.log(res.data)})
.catch((error) => {
  console.log(error)
}); */

import { URL_API } from "../constants";
export async function getProducts() {
  console.log("TOKEN SEND",JSON.parse(sessionStorage.getItem("token")));

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