export const fetchUserData = () => {
  return fetch("http://localhost:31299/api/news")
    .then((response) => response.json())
    .then((data) => data);
};
