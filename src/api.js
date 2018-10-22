export const getList = (query) =>
  fetch(`https://jsonplaceholder.typicode.com/${query}`, {
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => {
      let result = response.json();
      return result;
    })
    .then((shows) => {
      return shows;
    });
