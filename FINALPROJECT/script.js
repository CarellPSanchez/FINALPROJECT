document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  const get = id => document.getElementById(id);
  const val = id => get(id).value.trim();

  const requiredFields = [
    { id: 'firstName', errorId: 'errFirstName' },
    { id: 'lastName', errorId: 'errLastName' },
    { id: 'email', errorId: 'errEmail' },
    { id: 'password', errorId: 'errPassword' },
    { id: 'supportReason', errorId: 'errReason' }
  ];

  // Reset errors
  document.querySelectorAll('.error').forEach(e => e.textContent = '');

  requiredFields.forEach(field => {
    if (val(field.id) === '') {
      get(field.errorId).textContent = 'required';
      valid = false;
    }
  });

  const sex = document.querySelector('input[name="sex"]:checked');
  if (!sex) {
    get('errSex').textContent = 'required';
    valid = false;
  }

  if (valid) {
    localStorage.setItem('firstName', val('firstName'));
    localStorage.setItem('lastName', val('lastName'));
    localStorage.setItem('email', val('email'));
    localStorage.setItem('sex', sex.value);
    localStorage.setItem('reason', val('supportReason'));

    window.location.href = 'Profile.html';
  }
});
