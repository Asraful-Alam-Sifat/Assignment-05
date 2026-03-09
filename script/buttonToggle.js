// console.log("alfdao")
const allIssueContainer = document.getElementById("all-issue-container");
const openContainer = document.getElementById("open-container");
const closedContainer = document.getElementById("closed-container");

const showContent = (id) => {
     const btns = ["menu-btn-all", "menu-btn-open", "menu-btn-closed"]
loadAllIssues();
     for(let btn of btns){
        const button = document.getElementById(btn);
        
        button.classList.remove("menu-active");
        button.classList.add("bg-white", "text-black","border-gray-200","border-2");
     }

     const clickedBtn = document.getElementById(id);
     clickedBtn.classList.remove("bg-white", "text-black","border-gray-200","border-2")
     clickedBtn.classList.add("menu-active","bg-primary");

const issueCounter = document.getElementById("issues-count");
let count = 0;

     if(id === "menu-btn-all"){
        allIssueContainer.classList.remove("hidden");
        openContainer.classList.add("hidden");
        closedContainer.classList.add("hidden");

        count = allIssueContainer.querySelectorAll(".issue-card").length;

     }else if(id === "menu-btn-open"){
        allIssueContainer.classList.add("hidden");
        openContainer.classList.remove("hidden");
        closedContainer.classList.add("hidden");

        count = openContainer.querySelectorAll(".issue-card").length;

     }else if(id === "menu-btn-closed"){
        allIssueContainer.classList.add("hidden");
        openContainer.classList.add("hidden");
        closedContainer.classList.remove("hidden");

        count = closedContainer.querySelectorAll(".issue-card").length;
     }
  
    issueCounter.innerText = count;
   

}