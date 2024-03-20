"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Expressを読み込みます。
// @ts-ignore
var express_1 = require("express");
// @ts-ignore
var body_parser_1 = require("body-parser");
// Expressアプリケーションを作成します。
var app = (0, express_1.default)();
// bodyをjsonで受け取れるようにする
app.use(body_parser_1.default.json());
// urlencodedとjsonは別々に初期化する
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// ポート番号を設定します。
var PORT = 7777;
// POSTリクエストのルーティングを定義します。
// TODO: Bodyを受け取るようにする。
app.post('/', function (req, res) {
    try {
        console.log('kabaTron: ', req.body);
        res.send('ok');
    }
    catch (e) {
        // TODO: エラーメッセージを適切なものにする。
        res.send(JSON.stringify(e));
    }
});
// サーバーを起動します。
app.listen(PORT, function () {
    console.log("kabaTron running on http://localhost:".concat(PORT));
});
