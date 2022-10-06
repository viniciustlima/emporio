const path = require('path')
const fs = require('fs')

const utils = require('../utils/utils.js')

class AdminController {
  index(req, res) {
    if (req.session.login != undefined) {
      return res.render('admin/home', {
				login: req.session.login, utils, page: req.originalUrl,
			})
    }

    return res.redirect('/admin/login')
  }

  glogin(req, res) {
    if (req.session.login != undefined)
      return res.redirect('/admin',)

    return res.render('admin/login')
  }

  plogin(req, res) {
    if (req.session.login != undefined)
      return res.redirect('/admin')

    return res.send({ message: 'hello' })
  }
}

module.exports = new AdminController()