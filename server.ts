// Expressを読み込みます。
import express  from 'express';
// Expressアプリケーションを作成します。
const app = express();

// ポート番号を設定します。
const PORT = 7777;

// GETリクエストのルーティングを定義します。
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POSTリクエストのルーティングを定義します。
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// サーバーを起動します。
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});