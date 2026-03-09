const issueCounter = document.getElementById("issue-count");
let allIssues = []; // Global variable to store all issues data
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
  if (!button) return; // If the click is outside a category button, do nothing


  showSpinner();
  setTimeout(() => { 

const categoryBtns = document.querySelectorAll(".category");
  if (button) {
    
    categoryBtns.forEach((btn) => btn.classList.remove("btn-primary"));

    button.classList.add("btn-primary");
    if (allIssues.length === 0) {

  
    return;
  }
    const category = button.innerText.toLowerCase().trim();

 

    if(category === "all"){
      issueCounter.innerText = allIssues.length; // Update issue count for "All" category
      displayIssues(allIssues);
      
    }
      else{ 
        
       
        const filteredIssues = allIssues.filter(
  issue => issue.status?.toLowerCase() === category
);
 
issueCounter.innerText = filteredIssues.length; // Update issue count for selected category
        displayIssues(filteredIssues);

      }   
  }
 hideSpinner();
  }, 300); // Simulate loading time for better UX


});

// category Buttons funtionality Ends here

// card section started here

function showSpinner(){
  document.getElementById("loading-spinner").classList.remove("hidden");
}

function hideSpinner(){
  document.getElementById("loading-spinner").classList.add("hidden");
}
// All Card data load from json file and show in 

showSpinner();

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res => res.json())
.then(data => {
  allIssues = data.data;
  hideSpinner();
  displayIssues(allIssues);
})


function displayIssues(issues) {

  issueCounter.innerText = issues.length; // Update issue count based on the displayed issues
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  issues.forEach(issue => {
    

    const { title, description, category, status, labels, priority, author, assignee, createdAt, updatedAt  } = issue;


   const  isOpen = status === "open";
    

    const card = document.createElement("div");
    card.classList.add(
  "card",
  "bg-base-100",
  "shadow-sm",
  ...(
    isOpen 
      ? ["border-t-4", "border-green-300"] 
      : ["border-t-4", "border-blue-300"]
  )
); // Add border color based on status
    card.innerHTML = `
    <div class="card-body">
      <div class="flex justify-between">
          <span class=" flex items-center gap-2">
            ${status === "open" ? `<img width="22" src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`} <!-- status -->
          </span>
          <span class="badge badge-xs badge-warning bg-[#FECACA] text-[#EF4444] px-6 py-3 font-bold border-0">${priority.toUpperCase()}</span> <!-- category -->
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold">${title}</h2> <!-- title -->
        <p>${description}</p> <!-- description -->
      </div>


     
    <div class="mt-6 flex justify-between flex-wrap gap-2 ">
     ${labels?.[0] ? `
<button class="btn bg-[#FECACA] hover:btn-accent text-[#D97706] rounded-2xl">
  <img src="./assets/BugDroid.png" alt="">
  <span>${labels[0]}</span>
</button>
` : ""}
     ${labels?.[1] ? `
<button class="btn bg-[#FFF8DB] hover:btn-accent text-[#D97706] rounded-2xl">
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


// category filter funtionality


// search funtionality started here


document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search-input"); 
  const searchButton = document.getElementById("search-button"); 
  
  // search button click event
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      performSearch();
    });
  }
  
  // enter key press in search input field
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
});

// search function
function performSearch() {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value.trim();
  
  if (!searchText) {
    alert("Please enter a search query.");
    return;
  }
  
  // spinner 
  if (typeof showSpinner === 'function') {
    showSpinner();
  }
  
  // API call with search query
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(searchText)}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      // hide spinner after getting response
      if (typeof hideSpinner === 'function') {
        hideSpinner();
      }
      
      if (data && data.data) {
        displayIssues(data.data); // existing displayIssues ফাংশন 
      } else {
        document.getElementById("card-container").innerHTML = `
          <p class="text-center text-gray-500 col-span-3">No results found</p>
        `;
      }
    })
    .catch(error => {
      // hide spinner on error as well
      if (typeof hideSpinner === 'function') {
        hideSpinner();
      }
      
      console.error("Search error:", error);
      document.getElementById("card-container").innerHTML = `
        <p class="text-center text-red-500 col-span-3">Searching Error</p>
      `;
    });
}