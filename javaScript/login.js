const loginDataSubmit = () =>{
  fetch("../data/users/users.json")
  .then((res) => res.json())
  .then((users) => {
    const email = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      

      window.location.href = "./dashboard.html";

      alert("Login successful");


    } else {

      const loginError = document.getElementById("login-error");
      loginError.textContent = "Invalid Username or password";
      // alert("Invalid Username or password");
    }
  });

}