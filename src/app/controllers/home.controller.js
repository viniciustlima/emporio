const path = require('path')
const fs = require('fs')

const utils = require('../utils/utils.js')

class HomeController {
  index(req, res) {
    return res.render('index')
  }
}

module.exports = new HomeController()