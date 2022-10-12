const path = require('path')
const fs = require('fs')

const User = require('../models/user')
const utils = require('../utils/utils')

class UserController {
	editInfoG = (req, res) => {
		return res.render('admin/home', {
			login: req.session.login,
			utils,
			page: req.originalUrl,
			title: 'Editar Usuário',
		})
	}

	editInfoP = (req, res) => {
		return res.send('ok')
	}
}

module.exports = new UserController()
