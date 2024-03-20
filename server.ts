// Expressを読み込みます。
import express  from 'express';
import bodyParser from 'body-parser';

// Expressアプリケーションを作成します。
const app = express();
// bodyをjsonで受け取れるようにする
app.use(bodyParser.json());
// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// ポート番号を設定します。
const PORT = 7777;

// POSTリクエストのルーティングを定義します。
// TODO: Bodyを受け取るようにする。
app.post('/', (req, res) => {
  try {
    console.log('kabaTron: ', req.query);
    res.send('ok');
  } catch (e) {
    // TODO: エラーメッセージを適切なものにする。
    res.send(JSON.stringify(e));
  }
});

// サーバーを起動します。
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});