const url = 'https://api.github.com/search/users?type=users'

const main = () => {
  const sheet = SpreadsheetApp.getActive().getSheetByName('users')

  const rows = sheet
    .getDataRange()
    .getValues()
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => row[1] === '')
    .slice(0, 10)
    .map(({ row, index }) => ({
      request: { url: `${url}&q=${encodeURIComponent(row[0])}+in:email` },
      index,
    }))

  if (rows.length === 0) return

  const users = UrlFetchApp.fetchAll(rows.map(x => x.request)).map(res => {
    const { items } = JSON.parse(res.getContentText())
    const user = items.find(item => item.type === 'User')
    return Boolean(user) ? user.login : null
  })

  rows.forEach((row, i) => {
    const username = users[i]
    const range = sheet.getRange(row.index + 1, 2)
    if (username) {
      const value = SpreadsheetApp.newRichTextValue()
        .setText(username)
        .setLinkUrl(`https://github.com/${username}`)
        .build()
      range.setRichTextValue(value)
    } else {
      range.setValue('-')
    }
  })
}
