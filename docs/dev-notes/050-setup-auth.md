# Auth（認証）機能を追加

## ステップ

### 1. DBスキーマを作成

`packages/data-access-db/src/lib/schema.prisma`

下記のモデルを作成する。  

- User
- Book

### 2. Prisma Client コードを生成

`package.json`

```json
"db:generate": "npx env-cmd -f .env.local npx prisma generate"
```

### 3. Prisma Client コードを参照できるように package をビルド

`package.json`

```json
"postbuild": "npx env-cmd -f .env.local turbo build --filter='./packages/*' & npm i"
```

> `data-access-db`パッケージに Prisma Client コードが含まれているため、packageのビルドが必要となる。

### 4. パッケージをインストール

```bash
npm i -w apps/api bcrypt
npm i -D -w apps/api @types/bcrypt
```

### 5. users と auth モジュールを追加

apps/apiパッケージに、下記のモジュールを追加する。

- `apps/api/src/api/users`
- `apps/api/src/api/auth`

> コード詳細は、上記フォルダ内のファイルを参照のこと。

### 6. AppModule に、users と auth を追加

`apps/api/src/app.module.ts`

```ts
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/users/users.module';
...

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    ...
    }),
    // ---- Rest API ---- //
    AuthModule,

    // ---- GraphQL ---- //
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
```

### 7. 認証テスト

Postmanを利用して、下記の手順でテストを行う。

1. POST createUser => ユーザーを作成

    `http://localhost:3333/api/graphql`

    ```graphql
    mutation createUser{
        createUser(
            data: {
                username: "test-user1",
                password: "test1234"
            }
        )
        {
            id
            username
        }
    }
    ```

2. POST login => 作成したユーザーでログイン

    `http://localhost:3333/api/auth/login`

    Body  

    ```json
    {
        "username": "test-user1",
        "password": "test1234"
    }
    ```

3. POST currentUser  => ログイン中のユーザー情報を取得

    `http://localhost:3333/api/graphql`

    ```graphql
    query currentUser{
      currentUser{
          id
          username
      }
    }
    ```

4. POST logout => ログアウト

    `http://localhost:3333/api/auth/logout`

## フロントエンド側の実装メモ

### フォームのValidationを利用する場合

パッケージをインストール

```bash
npm i -w apps/web zod react-hook-form @hookform/resolvers
```
