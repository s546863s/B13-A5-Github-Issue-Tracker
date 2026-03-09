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

    });

    // first category button add Default btn-primary class
      const categoryBtns = document.querySelectorAll(".category");

      categoryBtns[0].classList.add("btn-primary");
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

// category Buttons funtionality Ends here

// card section started here

// All Card data load from json file and show in 

let allIssues = [];

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res => res.json())
.then(data => {
  allIssues = data.data;
  
  displayIssues(allIssues);
})


function displayIssues(issues) {

  const container = document.getElementById("card-container");
  container.innerHTML = "";
  issues.forEach(issue => {
    
     /*
{
"id": 1,
"title": "Fix navigation menu on mobile devices",
"description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
"status": "open",
"labels": [
"bug",
"help wanted"
],
"priority": "high",
"author": "john_doe",
"assignee": "jane_smith",
"createdAt": "2024-01-15T10:30:00Z",
"updatedAt": "2024-01-15T10:30:00Z"
},
    */

    const { title, description, category, status, labels, priority, author, assignee, createdAt, updatedAt  } = issue;


   
    
    /*
    <div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    <div class="flex justify-between">
        <span class=" flex items-center gap-2">
          status
          <img width="22" src="./assets/Open-Status.png" alt="">

          <img src="./assets/Closed- Status .png" alt="">
        </span>
        <span class="badge badge-xs badge-warning bg-[#FECACA] text-[#EF4444] px-6 py-3 font-bold border-0">priority</span>



    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold">title</h2>
      <p>description</p>
    </div>
    
    <div class="mt-6 flex gap-2 ">
      <button class="btn  bg-[#FECACA] text-[#EF4444] rounded-2xl hover:bg-primary hover:text-white">

        labels <img src="./assets/BugDroid.png" alt="">
        <span>

          
        </span>

    
        </button>
      <button class="btn  bg-[#FFF8DB] text-[#D97706] rounded-2xl hover:bg-primary hover:text-white">

        labels 
        <img src="./assets/Lifebuoy.png" alt="">
        <span>

          
        </span>

    
        </button>
      
    </div>
   
  </div>
   <hr class="mb-4 w-full border-gray-300 ">
   <div class="px-6">
    <p>author</p>
    <p>updatedAt</p>

   </div>
</div>

    */


    const card = document.createElement("div");
    
    card.classList.add("card","bg-base-100", "shadow-sm");
    card.innerHTML = `
    <div class="card-body">
      <div class="flex justify-between">
          <span class=" flex items-center gap-2">
            ${status === "open" ? `<img width="22" src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`} <!-- status -->
          </span>
          <span class="badge badge-xs badge-warning bg-[#FECACA] text-[#EF4444] px-6 py-3 font-bold border-0">${priority}</span> <!-- category -->
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold">${title}</h2> <!-- title -->
        <p>${description}</p> <!-- description -->
      </div>


     
    <div class="mt-6 flex justify-between flex-wrap gap-2 ">
     ${labels?.[0] ? `
<button class="btn bg-[#FFF8DB] text-[#D97706] rounded-2xl">
  <img src="./assets/BugDroid.png" alt="">
  <span>${labels[0]}</span>
</button>
` : ""}
     ${labels?.[1] ? `
<button class="btn bg-[#FFF8DB] text-[#D97706] rounded-2xl">
  <img src="./assets/Lifebuoy.png" alt="">
  <span>${labels[1]}</span>
</button>
` : ""}
      
    </div>
</div>
   <hr class="mb-4 w-full border-gray-300 ">
   <div class="px-6">
    <p>${author.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}</p>


    
    <p class="text-sm text-gray-500 flex items-center gap-2 pb-8">
<span>${new Date(updatedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</span>
<span class="mx-1">at</span>
<span class="mx-1">${new Date(updatedAt).toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})}</span>
</p>

   </div>
</div>
            
    `;

    container.appendChild(card);  


    
  });

}


