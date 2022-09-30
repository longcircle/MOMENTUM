const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const grteeing = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //   grteeing.innerText = `Hello ${username}`;
  //   greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings() {
  grteeing.innerText = `Hello ${Uname}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // grteeing.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings();
}
