const axios = require('axios');
const lista = [];

console.log('Antes da requisição');

axios.get('http://localhost:3000/agenda')
.then(function (response){

    console.log('Resposta recebida');
    response.data.forEach(post => {
        lista.push(post.id);
        lista.push(post.nome);
        lista.push(post.numero);
      });

      console.log(lista)

}).catch(function (error){
    console.log('Erro na requisição');
    console.log(error);
});
console.log('Depois da requisição');