module.exports = (req, res, next) => {
	if (req.session.login === undefined) res.redirect('/admin/login')
	else next()
}