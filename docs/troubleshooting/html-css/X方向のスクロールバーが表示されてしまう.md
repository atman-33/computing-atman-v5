# X方向のスクロールバーが表示されてしまう

## 対策

画面の横幅いっぱいに要素を広げる場合は、下記のように calc(-50vw + 50%) を利用する。

```tsx
<div
  className="bg-primary/10 mx-0 overflow-x-hidden p-8"
  style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
>
...
```

ただし、vw単位は、スクロールバーの領域も含めた横幅なので、垂直スクロールバーが表示されていると、スクロールバーの幅分誤差が出てしまう。  
そのため、html要素とbody要素に対して、X方向のみスクロールバーが出ないよう指定しておくと良い。  

```tsx
<html lang="en" suppressHydrationWarning className="overflow-x-hidden">
  <body className={`${inter.className} overflow-x-hidden`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
    ...
```

## 参考URL

[コンテナからの解放。](https://lopan.jp/breaking-out/)
