const router = require("express").Router();

const home = require("../controllers/home.controller");
const user = require("../controllers/user.controller");
const admin = require("../controllers/admin.controller");

const loginM = require("../middlewares/login.middleware");
const permissionM = require("../middlewares/permission.middleware");

router.get("/", home.index);
router.get("/home", home.home);

router.get("/admin", loginM, admin.index);
router.get("/admin/login", admin.glogin);
router.post("/admin/login", admin.plogin);

router.get("/admin/logout", admin.logout);

router.get("/admin/editar-usuario", loginM, user.editInfoG);
router.post("/admin/editar-usuario", loginM, user.editInfoP);

router.get("/admin/permission-error", loginM, admin.permissionError);

router.get("/admin/logs", loginM, admin.logs);
router.get("/admin/logs/files", loginM, admin.logs);

module.exports = router;
