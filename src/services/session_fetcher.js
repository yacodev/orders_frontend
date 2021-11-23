export async function loginUp(data) {
  console.log("DATA",data);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(
    "https://orders-carlos.herokuapp.com/api/session",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => data.body);
}

export async function logOut() {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  return fetch(
    "https://orders-carlos.herokuapp.com/api/session",
    requestOptions
  );
}
