const date = require('date-and-time')
const path = require('path')
const fs = require('fs')

class Utils {
	formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	percentage = (p, t) => (p * 100) / t

	getRole = (r) => {
		const roles = [
			'Presidente e Financeiro=8',
			'Administração=7',
			'Recursos Humanos=6',
			'Logística=5',
			'Produção=4',
			'Vendas=3',
			'Marketing=2',
			'Comunicação=1',
			'Professor=0'
			]

		for (const i in roles) {
			var index = roles[i].split('=')
			var role = index[0]
			var id = index[1]

			if (r == id) return role
		}
	}

	getRoleIcon = (r) => {
		const roles = [
			'fa-star=8',
			'fa-user-tie=7',
			'fa-suitcase=6',
			'fa-head-side-brain=5',
			'fa-oven=4',
			'fa-shopping-bag=3',
			'fa-analytics=2',
			'fa-megaphone=1',
			'fa-diploma=0'
		]

		for (const i in roles) {
			var index = roles[i].split('=')
			var icon = index[0]
			var id = index[1]

			if (r == id) return icon
		}
	}

	createFolder = (dir, name) => {
		if (fs.existsSync(`${dir}/${name}`)) return

		fs.mkdirSync(`${dir}/${name}`)
	}

	log = (data, encoding = 'utf8') => {
		const year = date.format(new Date(), 'YYYY'),
			month = date.format(new Date(), 'MM'),
			day = date.format(new Date(), 'DD')
		const now = date.format(new Date(), 'YYYY-MM-DD (HH:mm:ss)')

		const logFile = path.join(
			__dirname,
			`../../archives/logs/${year}/${month}/${`${year}-${month}-${day}`}.log`
		)
		data = `${now} | ${data}\n`

		if (!fs.existsSync(path.join(__dirname, `../../archives/logs/${year}`))) {
			fs.mkdirSync(path.join(__dirname, `../../archives/logs/`, year))
		}

		if (
			!fs.existsSync(
				path.join(__dirname, `../../archives/logs/${year}/${month}`)
			)
		)
			fs.mkdirSync(path.join(__dirname, `../../archives/logs/${year}/`, month))

		if (!fs.existsSync(logFile)) fs.writeFileSync(logFile, data, encoding)
		else fs.appendFileSync(logFile, data, { encoding })
	}

	getLogs = () => {
		const data = fs.readFileSync(
			path.join(
				__dirname,
				`../../archives/logs/${require('date-and-time').format(
					new Date(),
					'YYYY-MM-DD'
				)}.log`
			),
			{ encoding: 'utf8' }
		)

		var files = []

		for (const file of fs.readdirSync(
			path.join(__dirname, '../../archives/logs')
		))
			files.push(file)

		return { files, data }
	}

	alert = (res, req, data) =>
		res.write(
			`<script>alert('${data}') location.href='${req.headers['referer']}'</script>`
		)

	capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''
}

module.exports = new Utils()
