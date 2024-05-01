# Render.com にデプロイする方法

## Render.com Web URL

[Render.Com](https://dashboard.render.com/)

## ステップ

### 1. package.json にデプロイ用のスクリプトを準備

 `package.json`

```json
  "scripts": {
    ...
    "----DEPLOY SECTION----": "-----------------------",
    "cd:postbuild": "turbo build --filter='./packages/*' & npm i",
    "cd:build-web": "turbo build --filter=web",
    "cd:build-api": "npm run cd:postbuild & turbo build --filter=api",
    "cd:build": "npm run cd:build-api && npm run cd:build-web",
    "cd:api-start": "node apps/api/dist/main.js"
  },
```

### 2. デプロイ時のNode ver. を指定

`package.json`

```json
  ...,
  "engines": {
    "node": "20.x"
  },
  ...
```

### 3. デプロイ用設定（Render.com）

#### Build Command

##### Prismaを利用しない場合  

```bash
node --version && npm install --force && npm run cd:build
```

##### Prismaを利用する場合  

```bash
node --version && npm install --force && npx prisma generate && npm run cd:build
```

#### Start Command  

```bash
npm run cd:api-start
```

#### Environment Variables

- `.env.local`の環境変数に、本番環境の値を設定する。

```env
PORT=10000

NEXT_PUBLIC_APP_URL=https://computing-atman.com
NEXT_PUBLIC_API_ENDPOINT=https://computing-atman.com/api
NEXT_PUBLIC_API_GQL_URL=https://computing-atman.com/api/graphql 

NEXT_PUBLIC_GA_ID=****

API_PORT=10000
WEB_ORIGIN=https://computing-atman.com
DATABASE_URL="****"
```

- `PORT: 10000` (10000はRender.comのデフォルトポート)  **PORTを設定していなければ、画面が空白になってしまうため注意！**
