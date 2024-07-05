React + Next.js の学習ロードマップ

## 概要

* 期間: 1 週間
  * 期間内で可能な範囲でのロードマップを作成してください。
  * 最低限盛り込んでほしいこと
    * 環境構築
    * ステップバイステップで Hello world サンプルの作成
    * 初学者向けの、一般的に採用されている習作があれば

## 使用バージョン

- React: `18.3.1`
- Next.js: `14.2.4`

## ロードマップ

Artifacts として生成してください。


## ディレクトリ構成について

日毎に提示してくれるあなたのサンプルコードを後で読み返したいため、
日毎のサブディレクトリを追加した構成で解説をお願いします。

例：

```
/app
  /day1
    /components # コンポーネントも日毎に分けてください
      component_name1.tsx
      component_name2.tsx
      ...
      component_nameN.tsx
    /00_<title> # title はあなたが提示したロードマップ上のタイトル
        page.tsx
    /01_<title>
        page.tsx
    ...
    /nn_<title>
        page.tsx
  /day2
    /components
      component_name.tsx
    /00_<title>
        page.tsx
    /01_<title>
        page.tsx
    ...
    /nn_<title>
        page.tsx
  /day3
    /components
      component_name.tsx
    /00_<title>
        page.tsx
    /01_<title>
        page.tsx
    ...
    /nn_<title>
        page.tsx
  ...
  /dayN
    /components
      component_name.tsx
    /00_<title>
        page.tsx
    /01_<title>
        page.tsx
    ...
    /nn_<title>
        page.tsx
```

## 解説について

新規ステップ開始時に必ずロードマップのタイトルを１行目に記載し、次の行から解説をお願いします。
例えばタイトルが `6. リストのレンダリング` の場合であれば

```
6. リストのレンダリング

<ここから解説本文>
```

といった形で解説をお願いします。


また、解説はタイトルごとに出力し、私が「次のステップへ進みます」と言ったら次の解説を開始してください。


そして、私がその日の解説内容を一通り終えたと認識したら、「Day n はこれで終了になりますでしょうか？」と私が確認を入れます。

## サンプルコードについて

サンプルコードがクライアントレンダリングを想定している場合は `'use client';` ディレクティブを
その他、ディレクティブの記述が必要なコードを含んでいる場合は適宜サンプルコードにディレクティブも含めてください。


また、サンプルコード内のコメントアウト部分は日本語で、サンプルコード内のHTMLのテキストは英語で表記した内容とします。

例：

```typescript
<h1>tatically Generated Page</h1>

export const revalidate = 60; // 60秒ごとに再生成のチャンスがあります
```

## ローカルサーバーについて

学習中はローカルサーバーを用いる想定です。

解説によっては `npm run dev` ではなく、ビルドを実施(`npm build`)に行った上で起動を要する場合(`npm run start`) は、その都度提示してください。

また、ローカルサーバーではなくリモートにデプロイしないと動作確認できない機能を取り扱う場合も、その都度提示してください。


## 私のスキル

* HTML5/CSS：構文程度の知識（マークアップなど）
* VSCode拡張機能作成のため、TypeScriptを少し触ったことがある程度
* 他のプログラミング言語の実務経験あり
  * C, C++, C#, Java
* 学習環境
  * macOS
  * Homebrew 導入済み
