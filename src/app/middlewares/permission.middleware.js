module.exports = (req, res, next) => {
	if (req.session.login.role < 1) return res.redirect('/admin/permission-error')
	else next()
}