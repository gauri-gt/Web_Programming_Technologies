function showEmployeeDetails() {
  // Get form data
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const languages = Array.from(document.querySelectorAll('input[name="language"]:checked')).map(input => input.value);

  // Validate employee name length
  if (name.length < 5) {
    alert('Employee name must be at least 5 characters long.');
    return;
  }

  // Create table row with employee details
  const tableBody = document.getElementById('employeeTableBody');
  const newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${dob}</td>
    <td>${gender}</td>
    <td>${languages.join(', ')}</td>
  `;
}