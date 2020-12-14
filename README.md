## About

You can search GitHub users by email. You need to use Google Spreadsheet and Google Apps Script.

## Usage

1. Open https://docs.google.com/spreadsheets/d/1BvsAigG9ktvXbvLa9ScY656rNAkap7cgS2D_D0vlFwg/copy
2. Make a copy
3. Insert emails which you want to search on GitHub
4. Select Tools > Script editor
5. Run main function and review permissions
6. Set Time-driven trigger (Every minute)
7. Wait for the values to be entered
8. Delete the trigger set in step 6

## Limitation

You need to understand the limitations below.

- [Google Apps Script (URL Fetch calls)](https://developers.google.com/apps-script/guides/services/quotas)
- [GitHub API (Search)](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#rate-limit)
