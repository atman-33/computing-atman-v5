const description = `
### 説明

マウスを重ねたときに処理を実行するサンプルコード

### サンプルコード

~~~typescript
'use client';

export const Example = () => {
  return (
    <>
      <p>コンソールを確認しながら、マウスをコンポーネントに重ねてください。</p>
      <div
        className="bg-primary/50 my-8 rounded-md p-2 hover:cursor-pointer"
        onMouseEnter={() => console.log('Mouse enter')}
        onMouseLeave={() => console.log('Mouse leave')}
      >
        Please hover me
      </div>
    </>
  );
};
~~~
`;

export { description };
