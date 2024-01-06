const employeeSchema = require("../model/empModel");

const updateEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  const employeeIndex = employees.findIndex(emp => emp.id === id);

  if (employeeIndex === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }

  employees[employeeIndex] = {
    id,
    ...req.body,
  };

  return res.json(employees[employeeIndex]);
};

const deleteEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  const employeeIndex = employees.findIndex(emp => emp.id === id);

  if (employeeIndex === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }

  employees.splice(employeeIndex, 1);

  return res.json({ message: 'Employee deleted' });
};


const filterEmployeesBySalary = async (req, res) => {
  try {
    const { minSalary, maxSalary } = req.query;

    if (!minSalary || !maxSalary) {
      return res.status(400).json({ error: 'Both minSalary and maxSalary are required.' });
    }

    const employees = await Employee.find({
      salary: { $gte: parseFloat(minSalary), $lte: parseFloat(maxSalary) },
    });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateEmployee,
  deleteEmployee,
  filterEmployeesBySalary
};
