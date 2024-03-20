const axios = require('axios');

axios.get('http://example.com/path')
  .then(function (response) {
    // レスポンスを処理します
    console.log(response.data);
  })
  .catch(function (error) {
    // エラーを処理します
    console.log(error);
  });