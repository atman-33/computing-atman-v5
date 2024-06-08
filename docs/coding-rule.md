# コーディングルール

## Frontend(web)

### Next.js(React)ファイル名の命名規則

- コンポーネント: パスカルケース（例：UserProfile.tsx）
- hooks:キャメルケース
- それ以外：ケバブケース

> Next.js の公式ドキュメントやチュートリアルでは、ページコンポーネントのファイル名にはケバブケース（例：about-us.tsx）を使用することが推奨されている。
> しかし、それ以外のファイルやディレクトリ（例：ヘルパー関数、ライブラリ、コンポーネントなど）に関しては、Next.js は特定の命名規則を強制していない。

### handle〇〇（アクションをボタンなどのイベントで発火するケース）

`handle + 対象 + Event`  

e.g.  

`handleStartButtonClick`

## Backend(api)

## NestJSのモジュール名の命名規則

- module等を格納するフォルダ: 英単語の複数形とする。 - usersフォルダ etc
- module, controller, resolver, service: 英単語の複数形とする。 - users.module.ts etc

> ただし、認証処理（Auth）など、複数形の概念が必要無い場合は複数形でなくて良い。
