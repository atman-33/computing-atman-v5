# ブログ記事に目次を追加

## 参考URL

[Tocbot を使用し Next.js で構築したブログに目次を追加する](https://zenn.dev/yyykms123/articles/2023-12-03-adding-toc-to-nextjs-blog-using-tocbot)
[tocbotでZennとかQiitaみたいな目次を作る](https://inari-tech.net/posts/zenn-toc-tocbot)

## ステップ

### 1. パッケージをインストール

```bash
npm i tocbot -w apps/web
```

### 2. Toc コンポーネントを作成

`apps/web/src/components/toc/Toc.tsx`
