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
| Frontend | React 18, Storybook, CSS Modules / Tailwind, React Router|
| Backend | Python 3.10, Flask, MySQL|

## 📂 ディレクトリ構成

muscle-app/
├─ backend/ # flaskを用いたAPI ソース

├─ src/ # React フロントエンド

│ ├─ components/ # 再利用コンポーネント

│ ├─ pages/ # 画面ごとのコンテナ

│ └─ hooks/ # カスタムフック

├─ .storybook/ # Storybook 設定

├─ public/ # 静的アセット

└─ package.json # フロントの使用ライブラリ

