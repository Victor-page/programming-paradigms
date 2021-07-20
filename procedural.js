const form = document.getElementById('user-input');

const signupHandler = (event) => {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUserName = userNameInput.value;

  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (!enteredUserName.trim().length) {
    alert('Invalid input - username must not be empty!');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - password must be six characters or longer!');
    return;
  }

  const user = { userName: enteredUserName, password: enteredPassword };

  console.log(user);
  alert(`Hi, I'm ${user.userName}`);
};

form.addEventListener('submit', signupHandler);
