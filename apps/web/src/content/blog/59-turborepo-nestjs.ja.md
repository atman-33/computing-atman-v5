---
title: Turborepo NestJS から内部パッケージを参照できない問題の対処方法
description: Turborepo NestJSから内部パッケージ（Prisma等）を参照できない場合の対処方法を説明します。
date: 2024-05-05
lastmod: 2024-05-05
emoji: 🐺
tags: 
  - turborepo
published: true
---

Turborepo プロジェクトで内部パッケージを利用する場合、Next.jsなどフロントエンドプロジェクトは、transpilePackages 構成オプションが機能して問題無く内部パッケージを利用することができます。  

一方、NestJS などバックエンドプロジェクトは、そのまま内部パッケージをインポートするとエラーが発生してしまいます。

e.g. error  

```bash
"C:\Program Files\nodejs\npm.cmd" run start

> nest@0.0.1 start
> nest start               

Error: Cannot find module '@repo/database'
Require stack:
```

この問題は、内部パッケージをJavaScriptにコンパイルしてインポートすれば回避可能です。

## 対処方法

### 1. 内部パッケージに`tsup`をインストール

```bash
npm i -D tsup -w <workspace>
```

e.g. `data-access-db`という内部パッケージの場合（PrismaClient を利用するパッケージなどを想定）  

```bash
npm i -D tsup -w packages/data-access-db
```

### 2. 内部パッケージの`package.json`を変更

buildコマンドで、distフォルダにjsファイルをエクスポートするように設定します。  

`package.json`

```json
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "dev": "npm run build -- --watch"
  },
```

### 3. NestJSプロジェクトを起動する前にビルド & インストール

```bash
npm run build -w <workspace>
npm i
```

e.g.  

```bash
npm run build -w packages/data-access-db
```

毎回NestJSを立ち上げる際に内部パッケージをビルドするのは手間なため、トップディレクトリの`package.json`に、内部パッケージをビルド & インストールしてNestJSプロジェクトを起動するスクリプトを準備しておくと良いです。
