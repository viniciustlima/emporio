const path = require('path')
const fs = require('fs')

const utils = require('../utils/utils.js')

class AdminController {
  index(req, res) {
    return res.render('admin/home', {
			login: req.session.login, 
      utils, 
      page: req.originalUrl,
		})
  }

  glogin(req, res) {
    if (req.session.login != undefined)
      return res.redirect('/admin',)

    return res.render('admin/login')
  }

  plogin(req, res) {
    try {
      var data = fs.readFileSync(
        path.join(__dirname, '../config/users.json'),
        'utf8'
      )
      data = JSON.parse(data)

      for (let i = 0; i < data.users.length; i++) {
        if (
          req.body.username === data.users[i].username &&
          req.body.password === data.users[i].password
        ) {
          req.session.login = data.users[i]
          break
        }
      }
      utils.log(`[UAA LIA] uid:${req.session.login.id}`)
      return res.redirect('/admin')
    } catch (err) {
      return res.redirect('/admin')
    }
  }

  logout = (req, res) => {
    if (req.session.login != undefined) {
      utils.log(`[UAA LOA] uid:${req.session.login.id}`)
      req.session.login = undefined
    }
    return res.redirect('/admin')
  }

  permissionError = (req, res) => {
    utils.log(`[PDA RTH] uid:${login.id}`)
    return res.render('home', {
      login: req.session.login,
      utils,
      page: req.originalUrl,
      title: 'Erro de Permissão',
    })
  }

  logs = (req, res) => {
    return res.render('home', {
      login: req.session.login,
      utils,
      page: req.originalUrl,
      title: 'Logs da Aplicação',
      logs: utils.getLogs().data.split(/\n/),
      files: utils.getLogs().files,
    })
  }

  downloadLog = (req, res) =>
    res.download(path.join(__dirname, `../logs/${req.params.file}`))

  redirectHome = (_req, res) => res.redirect('/admin')
}

module.exports = new AdminController()