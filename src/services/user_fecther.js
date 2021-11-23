
export async function setFetchUser(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(
    "https://orders-carlos.herokuapp.com/api/user",
    requestOptions
  ).then((res) => res.json());
}


