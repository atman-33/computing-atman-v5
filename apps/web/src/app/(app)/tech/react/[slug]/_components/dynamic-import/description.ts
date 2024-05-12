const description = `
### 説明

Dynamic import を使用するサンプルコード

#### 補足

- Dynamic Importは、静的にインポートしたときに比べ、初期ロード時の読み込み量を減少させるため、サイトスピードの向上が期待できる。

#### Example.tsx

~~~typescript
const Example = () => {
  const dynamicImport = async () => {
    const m = await import('./add');
    console.log(m);
  };

  dynamicImport();
  // console.log('add: ', add(1, 2));

  return <div>Dynamic Import</div>;
};

export { Example as DynamicImportExample };

~~~

#### add.ts

~~~typescript
export const add = (a: number, b: number) => a + b;

~~~

`;

export { description as DynamicImportDescription };
