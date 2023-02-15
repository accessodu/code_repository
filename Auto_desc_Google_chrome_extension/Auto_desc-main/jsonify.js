let url = 'http://127.0.0.1:8090/json';

fetch(url,{method:'POST'})
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => { throw err });