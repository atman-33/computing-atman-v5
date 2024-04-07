# contentlayer を導入

## 参考URL

<https://contentlayer.dev/docs>

## 導入ステップ

### 1. パッケージをインストール

```bash
npm i contentlayer next-contentlayer date-fns -w apps/web
```

```bash
npm i -D @shikijs/compat rehype-autolink-headings rehype-pretty-code rehype-slug rehype-citation rehype-katex rehype-preset-minify rehype-prism-plus remark-code-import remark-gfm remark-math reading-time -w apps/web
```

### 2. next.config.js に、contentlayer の設定を追加

`apps/web/next.config.js`

```js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...
};

module.exports = withContentlayer(nextConfig)
```

### 3. tsconfig.json に、contentlayer の設定を追加

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    //  ^^^^^^^^^^^
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"]
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".contentlayer/generated"
    // ^^^^^^^^^^^^^^^^^^^^^^
  ]
}
```

### 4. .gitignore に、.contentlayer を追加

`.gitignore`

```
# contentlayer
.contentlayer
```

### 5. Content Schema を追加