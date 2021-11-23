
export async function setFetchUser(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(
    "http://localhost:3001/api/session/api/user",
    requestOptions
  ).then((res) => res.json());
}


