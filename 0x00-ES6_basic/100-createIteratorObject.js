export default function createIteratorObject(report) {
  // Extract all employees from all departments
  const allEmployees = Object.values(report.departments).flatMap(employees => employees);

  // Initialize index for iteration
  let index = 0;

  // Return the iterator object
  return {
    // Symbol.iterator function makes the object iterable
    [Symbol.iterator]: function() {
      return {
        // next() method returns the next employee in sequence
        next: function() {
          if (index < allEmployees.length) {
            return { value: allEmployees[index++], done: false };
          } else {
            // Iteration is complete
            return { done: true };
          }
        }
      };
    }
  };
}
