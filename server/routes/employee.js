const express = require("express");
const router = express.Router();
const { getEmployees, createEmployee, updateEmployee, removeEmployee, getEmployee } = require("../controllers/employee");

router.route("/").get(getEmployees).post(createEmployee)
router.route("/:id").put(updateEmployee).delete(removeEmployee).get(getEmployee)

module.exports = router;
