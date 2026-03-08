const loginDataSubmit = () =>{
  fetch("../users/users.json")
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

      // alert("Login successful");


    } else {
      alert("Invalid Username or password");
    }
  });

}