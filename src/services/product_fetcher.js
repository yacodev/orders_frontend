export async function getProducts() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  return fetch(
    "https://orders-carlos.herokuapp.com/api/product",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => data);
}