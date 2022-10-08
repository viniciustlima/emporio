const path = require('path')
const fs = require('fs')

class UserModel {
	userExists = (username) => {
		try {
			var data = fs.readFileSync(
				path.join(__dirname, '../config/users.json'),
				'utf8'
			)

			var data = JSON.parse(data)
			var users = data.users

			for (let i = 0; i < users.length; i++) {
				if (users[i].username === username) {
					return 'exists'
				}
			}

			return 'create'
		} catch (err) {
			return 'error'
		}
	}

	addUser = (info) => {
		try {
			var data = fs.readFileSync(
				path.join(__dirname, '../config/users.json'),
				'utf8'
			)

			var data = JSON.parse(data)
			var users = data.users

			var { name, username, role, password } = info

			users.push({
				id: users[users.length - 1].id + 1,
				name,
				role: parseInt(role),
				username,
				password,
			})

			fs.writeFileSync(
				path.join(__dirname, '../config/users.json'),
				JSON.stringify(data),
				{ encoding: 'utf8' }
			)

			return true
		} catch (e) {
			return false
		}
	}

	getAll = (string = true) => {
		var data = fs.readFileSync(
			path.join(__dirname, '../config/users.json'),
			'utf8'
		)

		return string ? data : JSON.parse(data)
	}
}

module.exports = new UserModel()
