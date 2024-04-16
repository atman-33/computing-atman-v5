# contentlayer を導入

## 参考URL

<https://contentlayer.dev/docs>

## 導入ステップ

### 1. パッケージをインストール

```bash
npm i contentlayer next-contentlayer date-fns -w apps/web
```

```bash
npm i -D @shikijs/compat unist-util-visit rehype-autolink-headings rehype-pretty-code rehype-slug rehype-citation rehype-katex rehype-preset-minify rehype-prism-plus remark-code-import remark-gfm remark-math reading-time -w apps/web
```

> `remark-gfm@4.0`で、contentlayerのファイル生成がエラーになる場合は、`remark-gfm@3.0.1`にver.をダウングレードしてみること。  
> 参考URL: <https://github.com/contentlayerdev/contentlayer/issues/558>

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

### 5. contentlayer.config.ts を追加

`/home/atman/Sites/computing-atman-v5/apps/web/contentlayer.config.ts`

- ComputedFields を追加
- defineDocumentType を追加
- makeSource を追加

### 6. mdx 用コンポーネントを追加

- `apps/web/src/components/mdx-components/components.tsx`
  - htmlタグに対する処理を記載
- `apps/web/src/components/mdx-components/copy-button.tsx`
  - コードブロックのコピーボタン
- `apps/web/src/components/mdx-components/Mdx.tsx`
  - mdxの表示用コンポーネント 

## Note

- slug  

`/blog/0-sample-post`

- slugAsParams  

`0-sample-post`