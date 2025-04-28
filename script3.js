form.addEventListener("submit", (e) => {
  e.preventDefault();
  validInputs();
  document.getElementById("datasub").style.display = "block";
  username.value = "";
  useremail.value = "";
  userpassword.value = "";
  cnfrmpassword.value = "";
  settime = function () {};
});

const setError = (element, message) => {
  const inpControls = element.parentElement;
  const errorDisplay = inpControls.querySelector(".error");
  errorDisplay.innerHTML = message;
  document.getElementById("datasub").style.display = "none";
};
const setSuccess = (element) => {
  const inpControls = element.parentElement;
  const errorDisplay = inpControls.querySelector(".error");
  errorDisplay.innerHTML = "";
};

const validName = (name) => {
  const res = /^[A-Za-z]+$/;
  return res.test(name);
};

const validEmail = (email) => {
  const res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return res.test(email);
};

const validPassword = (password) => {
  const res = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
  return res.test(password);
};
const validInputs = () => {
  const userName = username.value;
  const userEmail = useremail.value;
  const userPassword = userpassword.value;
  const confrimPassword = cnfrmpassword.value;

  if (userName === "") {
    setError(username, "Enter name");
  } else if (!validName(userName)) {
    setError(username, "only letters");
  } else {
    setSuccess(username);
  }

  if (userEmail === "") {
    setError(useremail, "Enter email");
  } else if (!validEmail(userEmail)) {
    setError(useremail, "valid email");
  } else {
    setSuccess(useremail);
  }

  if (userPassword === "") {
    setError(userpassword, "Enter password");
  } else if (!validPassword(userPassword)) {
    setError(userpassword, "password  should be strong len 6");
  } else {
    setSuccess(userpassword);
  }

  if (confrimPassword === "") {
    setError(cnfrmpassword, "confrim Password");
  } else if (userPassword !== confrimPassword) {
    setError(cnfrmpassword, "password mismatch");
  } else {
    setSuccess(cnfrmpassword);
  }
};
