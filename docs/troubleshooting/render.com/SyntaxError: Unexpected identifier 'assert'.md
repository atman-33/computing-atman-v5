# デプロイ時のビルドエラー

## 現象

- Render.com にデプロイすると発生

エラーログ  

```bash
INFO==> Build failed 😞
ERROR ERROR  run failed: command  exited (1)
INFO
INFOFailed:    web#build
INFO  Time:    9.456s 
INFOCached:    1 cached, 2 total
INFO Tasks:    1 successful, 2 total
INFO
INFOweb#build: command (/opt/render/project/src/apps/web) /opt/render/project/nodes/node-22.0.0/bin/npm run build exited (1)
ERRORweb:build: ERROR: command finished with error: command (/opt/render/project/src/apps/web) /opt/render/project/nodes/node-22.0.0/bin/npm run build exited (1)
ERRORweb:build: npm ERR!   at location: /opt/render/project/src/apps/web 
ERRORweb:build: npm ERR!   in workspace: web@1.0.0 
ERRORweb:build: npm ERR! Error: command failed 
ERRORweb:build: npm ERR! Lifecycle script `build` failed with error: 
INFOweb:build: }
ERRORweb:build:   [Symbol()]: [ 'error' ]
INFOweb:build:   },
INFOweb:build:         at link (node:internal/modules/esm/module_job:88:21)
INFOweb:build:         at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:422:30)
INFOweb:build:         at callTranslator (node:internal/modules/esm/loader:416:14)
INFOweb:build:         at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:166:18)
INFOweb:build:         at compileSourceTextModule (node:internal/modules/esm/utils:337:16)
ERRORweb:build:     error: SyntaxError: Unexpected identifier 'assert'
```

## 原因

`SyntaxError: Unexpected token '??='`

Node.jsのバージョンが対応していない時に発生することがある。

## 対策

開発環境で利用している、Node.js Ver. を、デプロイ先に設定する。  

e.g.  

`package.json`

```json
  "engines": {
    "node": "20.x"
  },
```
