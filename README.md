# Stryker Sample

stryker-js が動作する簡易デモプロジェクトです。

## 動作環境

- Node.js

## 使用技術

- Typescript
- Jest
- Express
- Supertest
- Stryker

## Scripts

```
yarn start
```

Express を使用したサーバーが立ち上がります。

`src/server/app.ts` で実装しており、Query パラメータを受け取り文字列を返す簡易的なものになっています。

Query パラメータがない場合は、400 BadRequest が返されます。

3000 番ポートで立ち上がるように設定されているので、ローカル環境では下記の URL を Chrome に入力することで動作していることを確認できます。

http://localhost:3000/hello?name=Yokoyama

---

```
yarn test:unit
```

Jest のユニットテスト起動コマンドです。 `test:unit-w` を入力すると watch モードで Jest が起動します。

---

```
yarn test:mutation
```

Stryker-js の起動コマンドです。実行後はルートの `reports` ディレクトリに HTML ファイル形式のレポートが出力されます。
