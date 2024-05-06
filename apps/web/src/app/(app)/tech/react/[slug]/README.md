# React 記事の追加方法

1. `apps/web/src/app/(app)/tech/react/[slug]/_components`に、サンプルのコンポーネントを追加する。
    - コンポーネント: Xxx.tsx
    - 説明ドキュメント: description.ts
2. `apps/web/src/app/(app)/tech/react/[slug]/_components/components.tsx`ファイルに、1. で作成したコンポーネントを追加する。
3. `apps/web/src/config/tech/react-docs-config.ts`に、追加記事のメタ情報を追加する。
