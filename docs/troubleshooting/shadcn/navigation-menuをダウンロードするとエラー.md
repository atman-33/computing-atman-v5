# Shadcnのnavigation-menuをダウンロードするとエラー

## 発生したエラー

```bash
TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function
```

## 結論

shacnのnavigation-menuでは、`use client` が必要

## 参考URL

[Next.js でreact__WEBPACK_IMPORTED_MODULE_0__.createContext is not a function というエラーが出る原因](https://ddryo.dev/context-is-not-a-function-on-nextjs/)
