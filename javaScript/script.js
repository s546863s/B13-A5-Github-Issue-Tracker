// category Buttons funtionality started here

fetch("../data/categorys/categorys.json")
  .then((res) => res.json())
  .then((res) => {
    const categoryContainer = document.getElementById("category-container");

    res.forEach((category) => {
      const categoryBtn = document.createElement("button");
      categoryBtn.classList.add(
        "category",
        "btn",
        "flex",
        "justify-center",
        "items-center",
        "gap-2",
        "my-6",
        "category",
      );
      categoryBtn.innerHTML = `
                
                <span>${category.name}</span>
            `;
      categoryContainer.appendChild(categoryBtn);

        // first category button add Default btn-primary class
      const categoryBtns = document.querySelectorAll(".category");

      categoryBtns[0].classList.add("btn-primary");
    });
  });

// category Buttons style add and remove funtionality
document.getElementById("category-container").addEventListener("click", (e) => {
  const button = e.target.closest(".category");

  if (button) {
    const categoryBtns = document.querySelectorAll(".category");

    categoryBtns.forEach((btn) => btn.classList.remove("btn-primary"));

    button.classList.add("btn-primary");
  }
});

// category Buttons funtionality started here
