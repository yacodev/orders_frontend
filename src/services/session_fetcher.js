export async function loginUp(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(
    "http://localhost:3001/api/session",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => data.token);
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
    "http://localhost:3001/api/session",
    requestOptions
  );
}
