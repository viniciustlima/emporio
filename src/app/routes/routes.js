const router = require('express').Router()

const home = require('../controllers/home.controller')
const admin = require('../controllers/admin.controller')

// const loginM = require('../middlewares/login.middleware')
// const permissionM = require('../middlewares/permission.middleware')

router.get('/', home.index)

router.get('/admin', admin.index)
router.get('/admin/login', admin.glogin)
router.post('/admin/login', admin.plogin)

// router.get('*', loginM, (_req, res) => res.redirect('/'))

module.exports = router