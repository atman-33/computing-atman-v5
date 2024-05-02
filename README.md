# Computing Atman v5

## 技術スタック

### モノレポ

- turborepo

### フロントエンド

- react
- nextjs
- shadcn
- tailwindcss
- jotai

### バックエンド

- nestjs
- graphql
- prisma
- mongo db

## 環境構築手順

### 1. パッケージをインストール

```bash
# ルートディレクトリ
npm i
```

> インターナルパッケージをビルドしておく必要があるため注意

### 2. .env ファイルを準備

`.env.example`をコピーして、コピーしたファイルを`.env.local`に変更

### 3. 開発環境用のDBを準備

`tools/database-local/setup-docker-mongo-single-replica.md`を参考にしながら、MongoDBを構築

### 4. プロジェクトを起動

```bash
# web, api を実行
npm run dev
# web のみ実行
npm run dev:web
# api のみ実行
npm run dev:api
```
