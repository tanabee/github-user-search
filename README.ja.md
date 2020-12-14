## 使い方

1. https://docs.google.com/spreadsheets/d/1BvsAigG9ktvXbvLa9ScY656rNAkap7cgS2D_D0vlFwg/copy
2. コピーを作成
3. メールアドレスの列にラントリップユーザーのメアド挿入
4. ツール＞スクリプトエディタ
5. main 関数を実行（スクリプトに権限を与える）
6. 時間主導型トリガーで毎分 main 関数を実行する設定にする
7. 全件取得できるまで待つ
8. 6 で設定したトリガーを削除

## 制限事項

利用の際には以下の制限を考慮する必要があります。

- [Google Apps Script (URL Fetch calls)](https://developers.google.com/apps-script/guides/services/quotas)
- [GitHub API (Search)](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#rate-limit)
