const API_URL = "http://localhost/ys1/index.php/ApiUser";

export const getUsers = () =>
  fetch(API_URL).then(res => res.json());

export const createUser = (data) =>
  fetch(`${API_URL}/store`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const deleteUser = (id) =>
  fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE"
  });


  export const updateUser = async (id, data) => {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};