 // category Buttons funtionality started here

fetch("../data/categorys/categorys.json")
    .then(res => res.json())
    .then(res =>{
        const categoryContainer = document.getElementById("category-container");
        res.forEach(category => {
            const categoryBtn = document.createElement("button");
            categoryBtn.classList.add("category", "btn", "btn-primary", "flex", "justify-center", "items-center", "gap-2", "my-6" );
            categoryBtn.innerHTML = `
                
                <span>${category.name}</span>
            `;
            categoryContainer.appendChild(categoryBtn);
        });
    })



     // category Buttons funtionality started here
