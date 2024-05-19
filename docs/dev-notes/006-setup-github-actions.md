# GitHub Actions を設定

## 参考URL

[GitHub Actionsでメタデータファイル(action.yml)を作成してワークフローを共通化しよう！](https://qiita.com/shun198/items/e7b7a3d9d3b86aec4813)

## アクションファイル

`.github/workflows/on-pr.yml`

実行内容

- type-check
- lint
- format
- test

## type-check の追加方法

### 1. 各プロジェクトに、type-check コマンドを追加

`apps/web/package.json`

```json
  "scripts": {
    "type-check": "npx tsc --project tsconfig.json --noEmit",
```

`apps/api/package.json`

```json
  "scripts": {
    "type-check": "npx tsc --project tsconfig.json --noEmit",
```

### 2. turbojson に、type-check コマンドを追加

`turbo.json`

```json
  "pipeline": {
    "type-check": {
      "dependsOn": ["^type-check"]
    },
```

### 3. package.json に、type-check コマンドを追加

`package.json`

```json
  "scripts": {
    "type-check": "turbo type-check",
```
