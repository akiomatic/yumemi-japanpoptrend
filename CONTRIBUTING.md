# Contributing Guide

ご覧いただきありがとうございます。
本プロジェクトにコントリビューションしていただける方は、ぜひご拝読ください。

---

## 目次

1. [開発環境](#開発環境)  
2. [開発環境のセットアップ](#開発環境のセットアップ)  
3. [主要スクリプト](#主要スクリプト)  
4. [コントリビューションガイド](#コントリビューションガイド)
   - [Issueの作成](#issueの作成)
   - [ブランチ戦略](#ブランチ戦略)
   - [コミットメッセージ規約](#コミットメッセージ規約)
   - [プルリクエストの作成](#プルリクエストの作成)

---

## 開発環境

| ツール | バージョン | 備考 |
|-------|-----------|------|
| Node.js | **≥ 18.18** | Next.js が推奨 |
| npm    | **≥ 10.x** | 推奨 |

**主要スタック**  
- Next.js 15 Canary (App Router) + TypeScript
- UI: Tailwind CSS + Headless UI
- Lint / Format: Biome
- 状態管理: nuqs
- テスト: Vitest, React Testing Library, Storybook

---

## 開発環境のセットアップ

```bash
git clone https://github.com/akiomatic/yumemi-frontend-engineer-codecheck.git
cd yumemi-frontend-engineer-codecheck

npm i  # 依存関係のインストール
cp .env.local.example .env.local  # コピー後、環境変数を設定
npm run dev  # http://localhost:3000 にアクセス
```

---

## 主要スクリプト

| スクリプト | 説明 |
|----------|------|
| `npm run dev`      | 開発サーバー (Next.js) |
| `npm run build`    | 本番ビルド |
| `npm start`        | 本番サーバー (ローカル) |
| `npm run lint`     | Biome 静的解析 |
| `npm run format`   | Biome フォーマッター |

---

## コントリビューションガイド

### Issueの作成

- 種別は **`Task`** または **`Bug-report`** のみ。  
  - Task: 新機能の開発
  - Bug-report: バグの報告
- テンプレートに則り、必要情報（再現手順、期待/実際の結果、スクリーンショット等）を添付。  
- 既存 Issue が無いか検索してから新規作成してください。

### ブランチ戦略

| プレフィックス | 用途 |
|---------------|------|
| `feature/`    | 新機能・改善 |
| `docs/`       | ドキュメント |
| `hotfix/`     | 緊急バグ修正 |

- **`dev` ブランチ**を常に起点とし、完成後は同ブランチへ PR を提出。  
- 命名例: `feature/prefecture-checkbox`, `hotfix/login-timeout`.

### コミットメッセージ規約

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 準拠。フォーマット:

```
<type>(optional scope): <subject>
```

例:

```
feat: 都道府県一覧取得 API を追加
fix(auth): トークンリフレッシュのバグ修正
prep: v1.0.0 リリース準備
```

> **注意**: PR タイトルは `Feat: ...` / `Fix: ...` のように **先頭大文字 + コロン + 半角スペース** で統一します。

### プルリクエストの作成

- タイトルは、`Feat: ...`, `Fix: ...`, `Docs: ...` など、[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 準拠。
  - 例: `Feat: 都道府県一覧取得 API を追加`
- テンプレートに則り、必要情報を添付。
- 提出前に、チェックリストを確認。
- レビュー承認後、`Squash and merge` でマージ。 

---

