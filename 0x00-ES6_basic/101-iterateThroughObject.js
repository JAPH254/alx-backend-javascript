export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to collect employee names
  const employeeNames = [];

  // Iterate through each employee using the iterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the array of employee names into a single string separated by '|'
  return employeeNames.join(' | ');
}
