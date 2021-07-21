const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value, flag, validatorVlue) => {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorVlue;
  }
};

const getUserInput = (inputElementId) =>
  document.getElementById(inputElementId).value;

const createUser = (userName, userPassword) => {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error(
      'Invalid input - username or password is wrong (password should be at least six characters).'
    );
  }

  return {
    userName,
    password: userPassword,
  };
};

const greetUser = (user) => alert(`Hi, I'm ${user.userName}`);

const signupHandler = (event) => {
  event.preventDefault();

  const enteredUserName = getUserInput('username');
  const enteredPassword = getUserInput('password');

  try {
    const newUser = createUser(enteredUserName, enteredPassword);
    greetUser(newUser);
    console.log(newUser);
  } catch (error) {
    alert(error.message);
  }
};

const connectForm = (formId, formSubmitHandler) => {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
};

connectForm('user-input', signupHandler);
