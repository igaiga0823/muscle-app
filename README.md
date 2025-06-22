# 💪 Muscle-App

**Muscle-App** は、トレーニング種目・ワークアウト・進捗を一元管理できる “パーソナル筋トレダッシュボード” です。  
フロントエンドは **React（Create React App）**、バックエンドは **Python API（Flask）** で実装し、コンポーネント UI は **mui** を使用しています。

## ✨ 主な機能
| 機能 | 概要 |
|------|------|
| 種目登録 | 種目名・対象筋群・サムネイル動画／画像を登録 |
| ワークアウト作成 | ドラッグ＆ドロップで種目を並べてセット数や重量を設定 |
| ログ記録 | 日付ごとに **セット × 回数 × 重量 × RPE** を入力 |
| 進捗可視化 | 1RM 推定値・ボリューム・頻度を自動グラフ化 |
| データ同期 | REST API 経由でフロント ↔ バックエンドを同期（JWT 認証想定） |
| PWA 対応 | スマホにホーム追加し、オフラインでもログ閲覧可能 |

## 🏗️ 技術スタック
| レイヤ | 使用技術 |
|--------|----------|
| Frontend | React 18 (CRA), Storybook, CSS Modules / Tailwind, React Router, React Hook Form |
| Backend | Python 3.10, FastAPI (予定), SQLAlchemy, SQLite → PostgreSQL |
| Dev & Ops | Docker Compose, GitHub Actions (CI), Vite Storybook, ESLint / Prettier |
| Test | Jest, React Testing Library, Pytest |
| Deployment | Front: Vercel / Netlify & Backend: Render / Railway |

> **言語比率**（GitHub Insights）: JavaScript ≈ 51 % / Python ≈ 27 % / CSS ≈ 20 % / HTML ≈ 2 % :contentReference[oaicite:1]{index=1}

## 📂 ディレクトリ構成


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
