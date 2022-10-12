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
		const { name, username, password } = req.body
		var login = req.session.login

		try {
			var data = JSON.parse(fs.readFileSync(
				path.join(__dirname, '../config/users.json'),
				'utf8'
			))

			var users = data.users

			for (let i = 0; i < users.length; i++) {
				if (users[i].id == login.id) {
					if (users[i].name != name) users[i].name = name
					if (users[i].username != username) users[i].username = username
					if (users[i].password != password) users[i].password = password

					fs.writeFileSync(
						path.join(__dirname, '../config/users.json'),
						JSON.stringify(data),
						'utf8'
					)

					return res.redirect('/admin/logout')
				}
			}
		} catch (e) {
			return res.redirect('/admin')
		}

		return res.send('ok')
	}
}

module.exports = new UserController()
