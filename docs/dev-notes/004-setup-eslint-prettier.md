# eslint をセットアップ

## prettier を追加

下記のファイルを追加

`.prettierignore`

```prettierignore
/dist

*.md
```

`.prettierrc`

```prettierrc
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100
}
```

## NextJS用のルール追加

`packages/eslint-config/next.js`

- features は `index.ts` ファイルからエクスポートするルールを追加

```js
  ...,
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
  },
```

## React Hook 用のルール追加

```bash
npm -w packages/eslint-config i -D eslint-plugin-react-hooks
```

`packages/eslint-config/next.js`

```js
  plugins: ['only-warn', 'react-hooks'],
  ...,
  rules: {
    ...,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
```

## TaiwindCSSのclassの順番並び替え

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

`.prittierrc`

```.prittierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

> 参考URL
> [TaiwindCSSのclassの順番並び替えを最速で導入する](https://zenn.dev/nbr41to/articles/e1fe669ae37875)
