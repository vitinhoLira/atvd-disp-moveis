const axios = require('axios');
const lista = [];

console.log('Antes da requisição');

axios.get('http://localhost:3000/posts')
.then(function (response){

    console.log('Resposta recebida');
    response.data.forEach(post => {
        lista.push(post.id);
        lista.push(post.title);
        lista.push(post.views);
      });

      console.log(lista)

}).catch(function (error){
    console.log('Erro na requisição');
    console.log(error);
});
console.log('Depois da requisição');