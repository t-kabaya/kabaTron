// Expressを読み込みます。
// @ts-ignore
import express  from 'express';
// @ts-ignore
import bodyParser from 'body-parser';

// Expressアプリケーションを作成します。
const app = express();
// bodyをjsonで受け取れるようにする
app.use(bodyParser.json());
// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
  extended: true
}));

// ポート番号を設定します。
const PORT = 7777;

// POSTリクエストのルーティングを定義します。
// TODO: Bodyを受け取るようにする。
app.post('/', (req, res) => {
  try {
    console.log('kabaTron: ', req.body);
    res.send('ok');
  } catch (e) {
    // TODO: エラーメッセージを適切なものにする。
    res.send(JSON.stringify(e));
  }
});

// サーバーを起動します。
app.listen(PORT, () => {
  console.log(`kabaTron running on http://localhost:${PORT}`);
});