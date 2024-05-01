# デプロイ時のビルドエラー

## 現象

- Render.com にデプロイすると発生

エラーログ  

```bash
web:build: > Build failed because of webpack errors
web:build: npm ERR! Lifecycle script `build` failed with error: 
web:build: npm ERR! Error: command failed 
web:build: npm ERR!   in workspace: web@1.0.0 
web:build: npm ERR!   at location: /opt/render/project/src/apps/web 
web:build: ERROR: command finished with error: command (/opt/render/project/src/apps/web) /opt/render/project/nodes/node-20.12.2/bin/npm run build exited (1)
```

## 原因

キャッシュやインストールしたnode_modulesが壊れている可能性あり

## 対策

デプロイ時のBuildコマンドの際に、キャッシュとnode_modules削除処理を加える。

```bash
npm cache verify && rm -rf node_modules && ...
```
