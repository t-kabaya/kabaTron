const axios = require('axios');

axios.post('http://localhost:7777',{})
  .then(function (response) {
    // レスポンスを処理します
    console.log(response.data);
  })
  .catch(function (error) {
    // エラーを処理します
    console.log(error);
  });