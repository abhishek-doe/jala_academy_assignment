const asyncHandler = require("express-async-handler");
const Employee = require("../modals/employee");

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  if (!employees) {
    throw new Error("NO EMPLOYEES FOUND");
  }
  res.status(200).json(employees);
});

const getEmployee = asyncHandler(async (req, res) => {
  const exist = await Employee.findById(req.params.id)
  if(!exist){
    throw new Error("Employee Not Exist")
  }
  res.status(200).json(exist)
})

const createEmployee = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const isAlready = await Employee.findOne({ email });
  if (isAlready) {
    throw new Error("EMPLOYEE ALREADY EXIST");
  }
  const employee = await Employee.create(req.body);

  res.status(201).json(employee);
});

const updateEmployee = asyncHandler(async (req, res) => {
  const isNotexist = await Employee.findById(req.params.id);
  if (!isNotexist) {
    throw new Error("EMPLOYEE NOT EXIST");
  }
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updated);
});

const removeEmployee = asyncHandler(async (req, res) => {
  const isNotexist = await Employee.findById(req.params.id);
  if (!isNotexist) {
    throw new Error("EMPLOYEE NOT EXIST");
  }
  const deleted = await Employee.deleteOne({ _id: req.params.id });
  res.status(200).json(deleted);
});

module.exports = { getEmployees, createEmployee, updateEmployee, removeEmployee, getEmployee };
