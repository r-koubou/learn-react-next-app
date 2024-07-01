# Claude 3.5 Sonnet による React + Next.js 1週間学習メニュー

## Day 1: 環境構築と基本概念

1. Node.jsのインストール
   ```
   brew install node
   ```

2. create-next-appを使用してプロジェクトを作成
   ```
   npx create-next-app@latest my-next-app
   cd my-next-app
   ```

3. 開発サーバーの起動
   ```
   npm run dev
   ```

4. ブラウザで http://localhost:3000 にアクセスして "Hello, World!" を表示

5. React及びNext.jsの基本概念を学習
   - コンポーネント
   - JSX
   - プロップス
   - ステート
   - Next.jsのファイルベースルーティング

## Day 2-3: Reactの基礎

1. 関数コンポーネントの作成
2. プロップスの使用
3. useState hookを使用したステート管理
4. イベントハンドリング
5. 条件付きレンダリング
6. リストのレンダリング

## Day 4-5: Next.jsの特徴

1. ページの作成とルーティング
2. Link コンポーネントを使用した画面遷移
3. Image コンポーネントを使用した画像の最適化
4. APIルートの作成と使用
5. getStaticProps を使用した静的生成
6. getServerSideProps を使用したサーバーサイドレンダリング

## Day 6: スタイリングとレイアウト

1. CSS Modulesの使用
2. グローバルスタイルの適用
3. レイアウトコンポーネントの作成

## Day 7: プロジェクト作成

以下のいずれかのプロジェクトに取り組む：

1. ToDoリストアプリ
   - タスクの追加、削除、完了機能
   - ローカルストレージを使用したデータの永続化

2. 簡単なブログアプリ
   - 記事一覧ページと詳細ページの作成
   - マークダウンでの記事作成機能

3. 天気予報アプリ
   - 外部APIを使用した天気情報の取得
   - 都市の検索機能

## 追加リソース

- [React公式ドキュメント](https://ja.reactjs.org/docs/getting-started.html)
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [React Hooks入門](https://ja.reactjs.org/docs/hooks-intro.html)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
