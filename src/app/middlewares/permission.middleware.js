module.exports = (req, res, next) => {
	if (req.session.login.role < 1) return res.redirect('/permission-error')
	else next()
}