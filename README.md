# Installing

1. ライブラリを公開していないため、packages.jsonに、以下を追記。
"kabaTron": "file:../../../../kbyProject/kabaTron"
2. yarn
3. kabaTronディレクトリでyarn start:server
4. React Nativeコード内部でconsole.logの代わりに、
import KabaTron from 'kabatron'
KabaTron({name: 'kaba'})

# 注意点
現状Androidシュミレーターにしか対応していない。