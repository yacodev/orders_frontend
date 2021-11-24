export async function getProducts() {
  console.log("TOKEN SEND",sessionStorage.getItem("token") );

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Berear token=${sessionStorage.getItem("token")}`,
    },
  };

  return fetch(
    "https://orders-carlos.herokuapp.com/api/product",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => data);
}