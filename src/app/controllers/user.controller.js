const path = require('path')
const fs = require('fs')

const User = require('../models/User')
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
}

module.exports = new UserController()
