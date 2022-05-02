fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ name: 'Pavel', age: 35 }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
