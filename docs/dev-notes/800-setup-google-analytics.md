# Google Analytics 設定

## 参考URL

[【Next.js 13】環境ファイル別で Google Analytics を設定する](https://zenn.dev/kazuki23/articles/4cc0cf35a20ac0)  
[Next.js アプリに Google Analytics を設定する (next/script)](https://maku.blog/p/zycmw6f/)

## ステップ

### 1. 測定IDを取得

Google Analytics > データストリームにウェブサイトを追加し、測定IDを取得する。

### 2. 環境変数に、`NEXT_PUBLIC_GA_ID`を追加

`.env.local`

```env
NEXT_PUBLIC_GA_ID=XXX
```

- turbo.json の globalEnv にも追加しておくこと。

### 3. gtagの型定義をインストール

```bash
npm i -D @types/gtag.js
```

### 4. GoogleAnalytics コンポーネントを作成

`apps/web/src/components/google-analytics/GoogleAnalytics.tsx`

> 詳細はファイルを参照のこと。

### 5. トップレベルのlayout.tsxに、GoogleAnalytics コンポーネントを追加

bodyタグの中に、GoogleAnalyticsコンポーネントを追加する。

`apps/web/src/app/layout.tsx`

```tsx
...

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">{children}</div>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```
