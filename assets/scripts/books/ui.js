const api = require('./api')
const template = require('../templates/booklist.handlebars')

const onGetBooks = function (event) {
  event.preventDefault()
  api.index()
  .then(function (data) {
    const booktemplate = template({ books: data.books })
    $('.content').append(booktemplate)
  })
}
module.exports = {
  onGetBooks
}
