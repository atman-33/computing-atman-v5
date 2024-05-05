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

## 問題点

上記のように、overflow-x-hidden を設定すると、stickyのような固定位置コンポーネントが機能しなくなる。  
そのため固定位置を利用している場合は、別方法で調整すること。

参考までに、md以上は +6px のスクロールバー幅を考慮し、md未満は横いっぱいにする方法もある（下記コード）。

```ts
<div className="bg-primary/10 ml-[calc(-50dvw+50%)] mr-[calc(-50dvw+50%)] p-8 md:ml-[calc(-50dvw+50%+6px)] md:mr-[calc(-50dvw+50%+6px)]">
...
```

## 参考URL

[コンテナからの解放。](https://lopan.jp/breaking-out/)
