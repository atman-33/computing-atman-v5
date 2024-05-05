# スマホ（iOS）で、inputのfocus時にズームインしてしまう

## 結論

meta データのviewportに、下記のコードを設定する。

e.g.  

`layout.tsx`

```ts
const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
export { viewport };
```

## 参考URL

下記は参考になるが、Next.js の Metadata にviewport を加える方法は上手くいかないため注意すること。  

[iOS で input の focus 時にズームインしてしまうのを viewport で解決する](https://zenn.dev/rhirayamaaan/articles/f0209ad6574ed4)  

[Resolving viewport duplication in Next.js 13.4](https://dev.to/oler/resolving-viewport-duplication-in-nextjs-134-51lm)
